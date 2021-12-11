import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as helmet from 'helmet';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // security setup

  app.use(helmet());
  app.enableCors();

  // openapi setup

  const config = new DocumentBuilder()
    .setTitle('Civic API')
    .setDescription('Civic API description')
    .setVersion('0.1.0')
    .addTag('main')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  await app.listen(3000);
}
bootstrap();
