import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

   app.useGlobalPipes(new ValidationPipe({
    whitelist: true, // Remove propriedades não validadas
    forbidNonWhitelisted: true, // Proíbe propriedades não permitidas
    transform: true, // Transforma os dados recebidos em classes correspondentes
  }));

  await app.listen(3001);
}
bootstrap();
