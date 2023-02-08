import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';
import { Column, Entity, JoinColumn, ManyToOne, Unique } from 'typeorm';
import { BaseCollection } from '../../common/entity/base.entity';
import { Local } from '../../locals/entity/local.entity';

@Entity()
@Unique(['date', 'local'])
export class Goals extends BaseCollection {
  @ApiProperty()
  @Column({ type: 'date' })
  @IsNotEmpty()
  date: Date;

  @ApiProperty({ type: () => Local })
  @IsNotEmpty()
  @ManyToOne(() => Local, (local) => local.country)
  @JoinColumn({ name: 'localId' })
  local: Local;
}
