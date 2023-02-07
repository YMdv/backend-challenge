import { ApiProperty } from '@nestjs/swagger';

export class CreateLocalDto {
  @ApiProperty()
  name: string;

  @ApiProperty()
  country: string;

  //TODO: ADICIONAR RELACIONAMENTOS
}
