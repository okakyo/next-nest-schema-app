import { Module } from '@nestjs/common';
import { AppController } from './app/main/app.controller';
import { AppService } from './app/main/app.service';
import { WorkModule } from './work/main/work.module';

@Module({
  imports: [WorkModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
