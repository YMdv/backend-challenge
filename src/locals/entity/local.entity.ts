import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';
import { Column, Entity, Unique } from 'typeorm';
import { BaseCollection } from '../../common/entity/base.entity';

@Entity()
@Unique(['name'])
export class Local extends BaseCollection {
  @ApiProperty()
  @Column({ length: 50 })
  @IsNotEmpty()
  name: string;

  //TODO: Adicionar relacionamentos
}
