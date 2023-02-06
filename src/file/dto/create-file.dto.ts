import { ApiProperty } from '@nestjs/swagger';

export class CreateFileDto {
  @ApiProperty()
  name: string;

  @ApiProperty()
  url: string;
}
