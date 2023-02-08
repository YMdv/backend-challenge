import { ApiProperty } from '@nestjs/swagger';
import { Column } from 'typeorm';
import { Local } from '../../locals/entity/local.entity';

export class UpdateGoalDto {
  @ApiProperty()
  @Column()
  date?: Date;

  @ApiProperty()
  @Column()
  local?: Local;
}
