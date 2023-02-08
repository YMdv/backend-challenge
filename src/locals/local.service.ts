import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CountryService } from '../country/country.service';
import { CreateLocalDto } from './dto/create-local.dto';
import { Local } from './entity/local.entity';

@Injectable()
export class LocalService {
  constructor(
    private readonly countryService: CountryService,
    @InjectRepository(Local)
    private readonly localRepository: Repository<Local>,
  ) {}

  public async createLocal(createLocalDto: CreateLocalDto): Promise<Local> {
    const country = await this.countryService.getCountryById(
      createLocalDto.country,
    );

    const checkLocal = await this.localRepository.findOne({
      where: [{ name: createLocalDto.name, country: { id: country.id } }],
    });

    if (checkLocal) {
      throw new ConflictException('this local already exists in this country');
    }

    return await this.localRepository
      .create({ ...createLocalDto, country })
      .save();
  }

  public async getLocalById(localId: string): Promise<Local> {
    const local = await this.localRepository.findOne({
      where: { id: localId },
      relations: ['country'],
    });

    if (!local) {
      throw new NotFoundException('local with this id not found');
    }

    return local;
  }

  public async getAllLocal(): Promise<Local[]> {
    return await this.localRepository.find();
  }

  public async deleteLocal(localId: string): Promise<string> {
    const local = await this.getLocalById(localId);

    await this.localRepository.remove(local);

    return 'removed';
  }
}
