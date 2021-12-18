import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateWorkDTO, UpdateWorkDTO } from './work.dto';
import { WorkEntity } from './work.entity';
import { WorkService } from './work.service';
@Controller('work')
export class WorkController {
  constructor(private readonly workService: WorkService) {}

  @Get('/')
  async getWorks() {
    return this.workService.findAll();
  }

  @Get('/:id')
  async getWork(@Param('id') id: number): Promise<WorkEntity> {
    return this.workService.findOne(id);
  }

  @Post('/')
  async createWork(@Body('work') work: CreateWorkDTO): Promise<WorkEntity> {
    return this.workService.create(work);
  }

  @Put('/:id')
  async updateWork(@Param('id') id: number, @Body('work') work: UpdateWorkDTO) {
    return this.workService.update(id, work);
  }

  @Delete('/:id')
  async deleteWork(@Param('id') id: number) {
    return this.workService.delete(id);
  }
}
