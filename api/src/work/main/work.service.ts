import {  Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import {InjectRepository} from "@nestjs/typeorm"
import { CreateWorkDTO, UpdateWorkDTO } from './work.dto';
import { WorkEntity } from './work.entity';

@Injectable()
export class WorkService {
  constructor(
    @InjectRepository(WorkEntity)
    private workRepository: Repository<WorkEntity>,
  ) {}
  findAll() {
    return this.workRepository.find();
  }
  findOne(id: number) {
    return this.workRepository.findOne(id);
  }

  create(work: CreateWorkDTO) {
    return this.workRepository.create(work);
  }

  update(id: number, work: UpdateWorkDTO) {
    return this.workRepository.update(id, work);
  }

  delete(id: number) {
    return this.workRepository.delete(id);
  }
}
