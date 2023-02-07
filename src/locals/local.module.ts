import { LocalController } from './local.controller';
import { LocalService } from './local.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Local } from './entity/local.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Local])],
  controllers: [LocalController],
  providers: [LocalService],
  exports: [LocalService],
})
export class LocalModule {}
