import { ApiProperty } from '@nestjs/swagger';
export class CreateCountryDto {
  @ApiProperty()
  name: string;

  @ApiProperty()
  url: string;
}
