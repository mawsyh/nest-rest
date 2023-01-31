import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { CommentClass, commentDocument } from './schemas/comment.schema';

@Injectable()
export class CommentsService {
  constructor(
    @InjectModel('Comments') private commentModel: Model<commentDocument>,
  ) {}

  async findAll(): Promise<CommentClass[]> {
    return await this.commentModel.find().exec();
  }

  async findById(id: string): Promise<CommentClass> {
    return await this.commentModel
      .findOne({ _id: new Types.ObjectId(id) })
      .exec();
  }

  async create(createCommentDto: CreateCommentDto) {
    const comment = new this.commentModel(createCommentDto);
    return { msg: 'New comment created', post: await comment.save() };
  }

  update(id: number, updateCommentDto: UpdateCommentDto) {
    return `This action updates a #${id} comment`;
  }

  remove(id: number) {
    return `This action removes a #${id} comment`;
  }
}
