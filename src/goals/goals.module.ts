import { GoalsController } from './goals.controller';
import { GoalsService } from './goals.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Goals } from './entity/goals.entity';
import { Module } from '@nestjs/common';
import { LocalModule } from '../locals/local.module';

@Module({
  imports: [TypeOrmModule.forFeature([Goals]), LocalModule],
  controllers: [GoalsController],
  providers: [GoalsService],
  exports: [GoalsService],
})
export class GoalsModule {}
