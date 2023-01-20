import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { PostsModule } from './posts/posts.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    UsersModule,
    PostsModule,
    MongooseModule.forRoot('mongodb://localhost/blog'),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
