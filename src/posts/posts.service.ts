import { Model, Types } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { PostClass, PostDocument } from './schemas/post.schema';
import { CreatePostDto } from './dto/create-post.dto';

@Injectable()
export class PostsService {
  constructor(@InjectModel('Posts') private postModel: Model<PostDocument>) {}

  async findAll(): Promise<PostClass[]> {
    return await this.postModel.find().exec();
  }

  async findById(id: string): Promise<PostClass> {
    return await this.postModel.findOne({ _id: new Types.ObjectId(id) }).exec();
  }

  async create(
    createPostDto: CreatePostDto,
  ): Promise<{ msg: string; post: PostClass }> {
    const createdCat = new this.postModel(createPostDto);
    return { msg: 'Post successfully created', post: await createdCat.save() };
  }
}
