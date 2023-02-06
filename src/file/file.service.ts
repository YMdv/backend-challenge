import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
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

    if (checkFile) {
      throw new ConflictException('file with that name or url already exists');
    }
    return await this.fileRepository.create(createFileDto).save();
  }

  public async getFileById(id: string): Promise<File> {
    const checkFile = await this.fileRepository.findOne({
      where: { id },
      relations: [], //TODO: adicionar relacionamentos
    });
    if (!checkFile) {
      throw new NotFoundException('file with this id not found');
    }
    return checkFile;
  }

  public async deleteFile(id: string): Promise<string> {
    const file = await this.getFileById(id);

    await this.fileRepository.remove(file);

    return 'removed';
  }
}
