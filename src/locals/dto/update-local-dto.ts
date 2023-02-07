import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';
import { Column } from 'typeorm';

export class UpdateLocalDto {
  @ApiProperty()
  @IsNotEmpty()
  @Column()
  name: string;
}
