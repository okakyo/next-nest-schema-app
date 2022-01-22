import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateWorkDTO, UpdateWorkDTO } from '../dto/work.dto';
import { WorkEntity } from '../db/works/work.entity';
import { WorkService } from '../services/work.service';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('work')
@Controller('work')
export class WorkController {
  constructor(private readonly workService: WorkService) {}

  @Get('/')
  @ApiResponse({ status: 200, description: 'success', type: [WorkEntity] })
  async getWorks() {
    return this.workService.findAll();
  }

  @Get('/:id')
  @ApiResponse({ status: 200, description: 'success', type: WorkEntity })
  @ApiResponse({ status: 404, description: 'Not Found' })
  async getWork(@Param('id') id: number): Promise<WorkEntity> {
    return this.workService.findOne(id);
  }

  @Post('/')
  @ApiResponse({ status: 201, description: 'Create Success', type: WorkEntity })
  @ApiResponse({ status: 400, description: 'Bad Request' })
  async createWork(@Body() work: CreateWorkDTO): Promise<WorkEntity> {
    return this.workService.create(work);
  }

  @Patch('/:id')
  @ApiResponse({ status: 200, description: 'Update Success', type: WorkEntity })
  @ApiResponse({ status: 400, description: 'Bad Request' })
  async updateWork(@Param('id') id: number, @Body() work: UpdateWorkDTO) {
    return this.workService.update(id, work);
  }

  @Delete('/:id')
  @ApiResponse({ status: 200, description: 'Delete Success', type: null })
  @ApiResponse({ status: 404, description: 'Not Founded' })
  async deleteWork(@Param('id') id: number) {
    return this.workService.delete(id);
  }
}
