import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Metas } from './entity/metas.entity';

@Injectable()
export class MetasService {
  constructor(
    @InjectRepository(Metas)
    private readonly metasRepository: Repository<Metas>,
  ) {}
}
