import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import {
  ApiConflictResponse,
  ApiCreatedResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiOperation,
  ApiParam,
  ApiTags,
} from '@nestjs/swagger';
import { CreateLocalDto } from './dto/create-local.dto';
import { LocalDto } from './dto/local-dto';
import { LocalService } from './local.service';

@ApiTags('Local')
@Controller('locals')
export class LocalController {
  constructor(private readonly localService: LocalService) {}

  @Post()
  @ApiOperation({
    summary: 'Cria um novo local dentro do país',
  })
  @ApiCreatedResponse({
    type: CreateLocalDto,
  })
  @ApiConflictResponse({
    description: 'Esse local já existe dentro desse país',
  })
  async createLocal(@Body() createLocalDto: CreateLocalDto) {
    return await this.localService.createLocal(createLocalDto);
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Retorna um local pelo id',
  })
  @ApiOkResponse({ type: LocalDto })
  @ApiNotFoundResponse({
    description: 'Local não encontrado',
  })
  async getLocalById(@Param('id') id: string) {
    return await this.localService.getLocalById(id);
  }
}
