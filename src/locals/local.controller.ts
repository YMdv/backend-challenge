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

  @Get(':localId')
  @ApiOperation({
    summary: 'Retorna um local pelo id',
  })
  @ApiOkResponse({ type: LocalDto })
  @ApiNotFoundResponse({
    description: 'Local não encontrado',
  })
  async getLocalById(@Param('localId') localId: string) {
    return await this.localService.getLocalById(localId);
  }

  @Get()
  @ApiOperation({
    summary: 'Retorna todos os Locais',
  })
  async getAllLocal() {
    return await this.localService.getAllLocal();
  }

  @Delete(':localId')
  @ApiOperation({
    summary: 'Exclui um local',
  })
  @ApiOkResponse({ type: DeleteResponseDto })
  @ApiNotFoundResponse({ description: 'Local não encontrado' })
  async deleteLocal(@Param('localId') localId: string) {
    return await this.localService.deleteLocal(localId);
  }
}
