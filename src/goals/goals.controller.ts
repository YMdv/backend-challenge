import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiConflictResponse,
  ApiCreatedResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { DeleteResponseDto } from '../common/dto/delete-response.dto';
import { CreateGoalsDto } from './dto/create-goals.dto';
import { GoalsDto } from './dto/goals-dto';
import { UpdateGoalDto } from './dto/update-goal-dto';
import { GoalsService } from './goals.service';

@ApiTags('Goal')
@Controller('goals')
export class GoalsController {
  constructor(private readonly goalsService: GoalsService) {}

  @Post()
  @ApiOperation({
    summary: 'Cria uma meta',
  })
  @ApiCreatedResponse({ type: GoalsDto })
  @ApiConflictResponse({
    description: 'Visualizador com esse titulo já existente',
  })
  async createMetas(@Body() createGoalsDto: CreateGoalsDto) {
    return await this.goalsService.createGoal(createGoalsDto);
  }

  @Get(':goalsId')
  @ApiOperation({
    summary: 'Retorna uma meta pelo id',
  })
  @ApiOkResponse({ type: GoalsDto })
  @ApiNotFoundResponse({
    description: 'Meta não encontrado',
  })
  async getGoalsById(@Param('goalsId') goalsId: string) {
    return await this.goalsService.getGoalById(goalsId);
  }

  @Get()
  @ApiOperation({
    summary: 'Retorna todos as Metas',
  })
  async getAllGoals() {
    return await this.goalsService.getAllGoals();
  }

  @Put(':goalsId')
  @ApiOperation({
    summary: 'Atualiza uma meta e seu local',
  })
  @ApiOkResponse({ type: GoalsDto })
  @ApiNotFoundResponse({ description: 'Meta não encontrada' })
  @ApiBadRequestResponse({
    description: 'Dados inválidos',
  })
  async updateGoals(
    @Param('goalsId') goalsId: string,
    @Body() updateGoalDto: UpdateGoalDto,
  ) {
    return await this.goalsService.updateGoals(goalsId, updateGoalDto);
  }

  @Delete(':goalsId')
  @ApiOperation({
    summary: 'Exclui uma meta',
  })
  @ApiOkResponse({ type: DeleteResponseDto })
  @ApiNotFoundResponse({ description: 'Meta não encontrada' })
  async deleteGoals(@Param('goalsId') goalsId: string) {
    return await this.goalsService.deleteGoal(goalsId);
  }
}
