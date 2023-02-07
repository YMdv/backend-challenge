import { LocalModule } from './locals/local.module';
import { FileModule } from './file/file.module';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ormConfig } from './ormconfig';
import { CountryModule } from './country/country.module';

@Module({
  imports: [
    LocalModule,
    FileModule,
    TypeOrmModule.forRoot(ormConfig),
    CountryModule,
  ],
})
export class AppModule {}
