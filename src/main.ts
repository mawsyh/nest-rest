import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe());

  const config = new DocumentBuilder()
    .setTitle('Nest Rest')
    .setDescription('The first swagger experience for me with nest js')
    .setVersion('1.0')
    .build();

  const ducument = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/api', app, ducument);

  await app.listen(3001);
}
bootstrap();
