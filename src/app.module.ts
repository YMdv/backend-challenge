import { FileModule } from './file/file.module';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ormConfig } from './ormconfig';
import { CountryModule } from './country/country.module';

@Module({
  imports: [FileModule, TypeOrmModule.forRoot(ormConfig), CountryModule],
})
export class AppModule {}
