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
import { CreateLocalDto } from './dto/create-local.dto';
import { LocalDto } from './dto/local-dto';
import { UpdateLocalDto } from './dto/update-local-dto';
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

  @Get()
  @ApiOperation({
    summary: 'Retorna todos os Locais',
  })
  async getAllLocal() {
    return await this.localService.getAllLocal();
  }

  /* @Get(':countryId')
  @ApiOperation({
    summary: 'Retorna todos os locais existentes em um país',
  })
  @ApiOkResponse({ type: LocalDto })
  @ApiNotFoundResponse({
    description: 'País não existe',
  })
  async getAllLocalByCountry(@Param('countryId') countryId: string) {
    return await this.localService.getAllLocalByCountry(countryId);
  }*/

  @Put(':localId')
  @ApiOperation({
    summary: 'Atualiza um local',
  })
  @ApiOkResponse({ type: LocalDto })
  @ApiNotFoundResponse({ description: 'Local não encontrado' })
  @ApiBadRequestResponse({
    description: 'Dados inválidos',
  })
  async updateViewer(
    @Param('localId') localId: string,
    @Body() updateLocalDto: UpdateLocalDto,
  ) {
    return await this.localService.updateLocal(localId, updateLocalDto);
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
