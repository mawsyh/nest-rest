import { Module } from '@nestjs/common';
import { Post } from '@nestjs/common/decorators';
import { MongooseModule } from '@nestjs/mongoose';
import { PostsController } from './posts.controller';
import { PostsService } from './posts.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: Post.name, schema: Post }])],
  controllers: [PostsController],
  providers: [PostsService],
})
export class PostsModule {}
