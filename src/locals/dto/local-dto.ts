import { OmitType } from '@nestjs/swagger';
import { Local } from '../entity/local.entity';

export class LocalDto extends OmitType(Local, ['country']) {}
