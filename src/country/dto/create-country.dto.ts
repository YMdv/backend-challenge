import { ApiProperty } from '@nestjs/swagger';
export class CreateCountryDto {
  @ApiProperty()
  name: string;

  @ApiProperty()
  link: string;
}
