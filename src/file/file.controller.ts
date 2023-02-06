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
import { CreateFileDto } from './dto/create-file.dto';
import { FileDto } from './dto/file-dto';
import { FileService } from './file.service';

@ApiTags('File')
@Controller('files')
export class FileController {
  constructor(private readonly fileService: FileService) {}

  @Post()
  @ApiOperation({
    summary: 'Cria um novo arquivo',
  })
  @ApiCreatedResponse({
    type: CreateFileDto,
  })
  @ApiConflictResponse({
    description: 'Arquivo com esse nome ou url já cadastrado',
  })
  async createFile(@Body() createFileDto: CreateFileDto) {
    return await this.fileService.createFile(createFileDto);
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Retorna um arquivo pelo id',
  })
  @ApiOkResponse({
    type: FileDto,
  })
  @ApiNotFoundResponse({
    description: 'Arquivo com esse id não encontrado',
  })
  async getFileById(@Param('id') id: string) {
    return await this.fileService.getFileById(id);
  }

  @Delete(':id')
  @ApiOperation({
    summary: 'Exclui um arquivo pelo id',
  })
  @ApiOkResponse({
    type: DeleteResponseDto,
  })
  @ApiNotFoundResponse({
    description: 'Arquivo não encontrado',
  })
  async deleteFile(@Param('id') id: string) {
    return await this.fileService.deleteFile(id);
  }
}
