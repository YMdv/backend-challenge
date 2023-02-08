import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import {
  ApiConflictResponse,
  ApiCreatedResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { DeleteResponseDto } from '../common/dto/delete-response.dto';
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

  @Get()
  @ApiOperation({
    summary: 'Retorna todos os Países',
  })
  async getAllCountrys() {
    return await this.countryService.getAllCountry();
  }

  @Delete(':id')
  @ApiOperation({
    summary: 'Exclui um País',
  })
  @ApiOkResponse({ type: DeleteResponseDto })
  @ApiNotFoundResponse({
    description: 'País não encontrado',
  })
  async deleteCountry(@Param('id') id: string) {
    return await this.countryService.deleteCountry(id);
  }
}
