import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import {
  ApiConflictResponse,
  ApiCreatedResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { CountryService } from './country.service';
import { CountryDto } from './dto/country-dto';
import { CreateCountryDto } from './dto/create-country.dto';
@ApiTags('Country')
@Controller('countrys')
export class CountryController {
  constructor(private readonly countryService: CountryService) {}

  @Post()
  @ApiOperation({
    summary: 'Criar um novo país',
  })
  @ApiCreatedResponse({
    type: CreateCountryDto,
  })
  @ApiConflictResponse({
    description: 'País já cadastrado',
  })
  async createCountry(@Body() createCountryDto: CreateCountryDto) {
    return await this.countryService.createCountry(createCountryDto);
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Retorna um país pelo id',
  })
  @ApiOkResponse({ type: CountryDto })
  @ApiNotFoundResponse({
    description: 'País não encontrado',
  })
  async getCountryById(@Param('id') id: string) {
    return await this.countryService.getCountryById(id);
  }
}
