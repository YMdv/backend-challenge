import { MetasController } from './metas.controller';
import { MetasService } from './metas.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Metas } from './entity/metas.entity';
import { Module } from '@nestjs/common';

@Module({
  imports: [TypeOrmModule.forFeature([Metas])],
  controllers: [MetasController],
  providers: [MetasService],
  exports: [MetasService],
})
export class MetasModule {}
