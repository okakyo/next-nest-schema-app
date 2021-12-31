import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateWorkDTO, UpdateWorkDTO } from '../dto/work.dto';
import { WorkEntity } from '../db/works/work.entity';
import { WorkService } from '../services/work.service';
import { ApiResponse } from '@nestjs/swagger';
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
  @ApiResponse({status: 201, description: 'Create Success',type: WorkEntity})
  @ApiResponse({ status: 400, description: 'Bad Request'})
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
