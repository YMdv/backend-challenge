import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { In, Repository } from 'typeorm';
import { CreateCountryDto } from './dto/create-country.dto';
import { Country } from './entity/country.entity';

@Injectable()
export class CountryService {
  constructor(
    @InjectRepository(Country)
    private readonly countryRepository: Repository<Country>,
  ) {}

  public async createCountry(
    createCountryDto: CreateCountryDto,
  ): Promise<Country> {
    const checkCountry = await this.countryRepository.findOne({
      where: [{ name: createCountryDto.name }],
    });

    if (checkCountry) {
      throw new ConflictException('country with that name already exists');
    }
    return await this.countryRepository.create(createCountryDto).save();
  }

  public async getCountryById(id: string): Promise<Country> {
    const country = await this.countryRepository.findOne({
      where: { id },
      relations: [], //TODO: Adicionar relacionamentos
    });

    if (!country) {
      throw new NotFoundException('country with this id not found');
    }
    return country;
  }

  public async getAllCountry(): Promise<Country[]> {
    return await this.countryRepository.find();
  }

  public async getCountryByIds(countryIds: string[]): Promise<Country[]> {
    return await this.countryRepository.findBy({ id: In(countryIds) }); //TODO: CRIAR CONTROLADOR
  }

  public async deleteCountry(id: string): Promise<string> {
    const country = await this.getCountryById(id);

    await this.countryRepository.remove(country);

    return 'removed';
  }
}
