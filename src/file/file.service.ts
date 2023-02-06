import { ConflictException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateFileDto } from './dto/create-file.dto';
import { File } from './entity/file.entity';

@Injectable()
export class FileService {
  constructor(
    @InjectRepository(File)
    private readonly fileRepository: Repository<File>,
  ) {}

  public async createFile(createFileDto: CreateFileDto): Promise<File> {
    const checkFile = await this.fileRepository.findOne({
      where: [
        {
          name: createFileDto.name,
          url: createFileDto.url,
        },
      ],
    });

    if (checkFile.name) {
      throw new ConflictException('file with that name already exists');
    } else if (checkFile.url) {
      throw new ConflictException('file with that url already exists');
    }
    return await this.fileRepository.create(createFileDto).save();
  }
}
