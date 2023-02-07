import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  Unique,
} from 'typeorm';
import { BaseCollection } from '../../common/entity/base.entity';
import { Country } from '../../country/entity/country.entity';
import { Metas } from '../../metas/entity/metas.entity';

@Entity()
@Unique(['name', 'country'])
export class Local extends BaseCollection {
  @ApiProperty()
  @Column({ length: 50 })
  @IsNotEmpty()
  name: string;

  @ApiProperty({ type: () => Country })
  @IsNotEmpty()
  @ManyToOne(() => Country, (country) => country.locals)
  @JoinColumn({ name: 'countryId' })
  country: Country;

  @ApiProperty({ type: () => Metas })
  @OneToMany(() => Metas, (metas) => metas.local)
  metas: Metas[];
  //TODO: Adicionar relacionamentos
}
