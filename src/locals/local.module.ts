import { LocalController } from './local.controller';
import { LocalService } from './local.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Local } from './entity/local.entity';
import { CountryService } from '../country/country.service';
import { CountryModule } from '../country/country.module';

@Module({
  imports: [TypeOrmModule.forFeature([Local]), CountryModule],
  controllers: [LocalController],
  providers: [LocalService],
  exports: [LocalService],
})
export class LocalModule {}
