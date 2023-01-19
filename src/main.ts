import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Nest Rest')
    .setDescription('alaki desc')
    .setVersion('1.0')
    .build();

  const ducument = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/', app, ducument);

  await app.listen(3000);
}
bootstrap();
