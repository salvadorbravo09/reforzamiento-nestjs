import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { envs } from './config/envs';

async function bootstrap() {
  // Crear la aplicación NestJS
  const app = await NestFactory.create(AppModule);

  // Agregar prefijo 'api' a todas las rutas
  app.setGlobalPrefix('api');

  // Configurar validaciones globales para DTOs
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  );

  // Iniciar el servidor en el puerto configurado
  await app.listen(envs.port || 3000);
  console.log(`Server is running on port ${envs.port}`);
}
bootstrap();
