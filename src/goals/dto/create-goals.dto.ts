import { ApiProperty } from '@nestjs/swagger';

export class CreateGoalsDto {
  @ApiProperty()
  date: Date;

  @ApiProperty()
  local: string;
}
