import { Module } from '@nestjs/common';
import { CommentsService } from './comments.service';
import { CommentsController } from './comments.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { CommentSchema } from './schemas/comment.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Comments', schema: CommentSchema }]),
  ],
  controllers: [CommentsController],
  providers: [CommentsService],
})
export class CommentsModule {}
