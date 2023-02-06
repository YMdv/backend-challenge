import { OmitType } from '@nestjs/swagger';
import { Country } from '../entity/country.entity';

export class CountryDto extends OmitType(Country, []) {} //TODO: Adicioanr relacionamentos
