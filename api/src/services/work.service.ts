import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateWorkDTO, UpdateWorkDTO } from '../dto/work.dto';
import { WorkEntity } from '../db/works/work.entity';

@Injectable()
export class WorkService {
  constructor(
    @InjectRepository(WorkEntity)
    private workRepository: Repository<WorkEntity>,
  ) {}
  findAll(): Promise<WorkEntity[]> {
    return this.workRepository.find({ order: { id: 'ASC' } });
  }
  findOne(id: number): Promise<WorkEntity> {
    return this.workRepository.findOne(id);
  }

  create(work: CreateWorkDTO): Promise<WorkEntity> {
    return this.workRepository.save(work);
  }

  update(id: number, work: UpdateWorkDTO) {
    return this.workRepository.update(id, work);
  }

  delete(id: number) {
    return this.workRepository.delete({ id: id });
  }
}
