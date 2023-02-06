import { OmitType } from '@nestjs/swagger';
import { File } from '../entity/file.entity';

export class FileDto extends OmitType(File, []) {} //TODO: Adicionar relacionamentos
