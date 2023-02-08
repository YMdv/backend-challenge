import { Injectable } from '@nestjs/common';
import {
  ConflictException,
  NotFoundException,
} from '@nestjs/common/exceptions';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { LocalService } from '../locals/local.service';
import { CreateGoalsDto } from './dto/create-goals.dto';
import { UpdateGoalDto } from './dto/update-goal-dto';
import { Goals } from './entity/goals.entity';

@Injectable()
export class GoalsService {
  constructor(
    private readonly localService: LocalService,
    @InjectRepository(Goals)
    private readonly goalsRepository: Repository<Goals>,
  ) {}

  public async createGoal(createGoalsDto: CreateGoalsDto): Promise<Goals> {
    const local = await this.localService.getLocalById(createGoalsDto.local);

    const checkGoals = await this.goalsRepository.findOne({
      where: [{ date: createGoalsDto.date, local: { id: local.id } }],
    });

    if (checkGoals) {
      throw new ConflictException('this goal already exists for this location');
    }

    return await this.goalsRepository
      .create({ ...createGoalsDto, local })
      .save();
  }

  public async getGoalById(goalsId: string): Promise<Goals> {
    const goals = await this.goalsRepository.findOne({
      where: { id: goalsId },
      relations: ['local'],
    });

    if (!goals) {
      throw new NotFoundException('goal with this id not found');
    }

    return goals;
  }

  public async getAllGoals(): Promise<Goals[]> {
    return await this.goalsRepository.find();
  }

  //usando preload para criar um objeto goals e o.save para persistir as alteraçoes no banco
  public async updateGoals(
    goalsId: string,
    updateGoalsDto: UpdateGoalDto,
  ): Promise<Goals> {
    await this.getGoalById(goalsId);

    return await (
      await this.goalsRepository.preload({
        id: goalsId,
        ...updateGoalsDto,
      })
    ).save();
  }

  public async deleteGoal(goalsId: string): Promise<string> {
    const goals = await this.getGoalById(goalsId);

    await this.goalsRepository.remove(goals);

    return 'removed';
  }
}
