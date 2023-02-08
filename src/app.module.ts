import { GoalsModule } from './goals/goals.module';
import { LocalModule } from './locals/local.module';
import { FileModule } from './file/file.module';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ormConfig } from './ormconfig';
import { CountryModule } from './country/country.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(ormConfig),
    GoalsModule,
    LocalModule,
    FileModule,
    CountryModule,
  ],
})
export class AppModule {}
