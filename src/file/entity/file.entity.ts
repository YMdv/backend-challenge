import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';
import { Column, Entity, Unique } from 'typeorm';
import { BaseCollection } from '../../common/entity/base.entity';

@Entity()
@Unique(['url'])
export class File extends BaseCollection {
  @ApiProperty()
  @Column({ length: 50 })
  name: string;

  @ApiProperty()
  @IsNotEmpty()
  @Column({ type: 'varchar', length: 255 })
  url: string;
}
