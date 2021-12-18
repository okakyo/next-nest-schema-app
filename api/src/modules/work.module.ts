import { Module } from '@nestjs/common';
import { WorkController } from '../controllers/work.controller';
import { WorkService } from '../services/work.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WorkEntity } from '../entities/work.entity';

@Module({
  imports: [TypeOrmModule.forFeature([WorkEntity])],
  exports: [TypeOrmModule],
  controllers: [WorkController],
  providers: [WorkService],
})
export class WorkModule {}
