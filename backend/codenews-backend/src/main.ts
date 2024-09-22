import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
  origin: 'http://localhost:3000',  // Origem permitida
  methods: ['GET', 'POST', 'PUT', 'DELETE'],  // Métodos permitidos
  });
  app.enableCors();
  await app.listen(8000);
}
bootstrap();
