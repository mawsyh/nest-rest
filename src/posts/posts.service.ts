import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Post, PostDocument } from './schemas/post.schema';
import { CreatePostDto } from './dto/create-post.dto';

@Injectable()
export class PostsService {
  constructor(@InjectModel(Post.name) private postModel: Model<PostDocument>) {}
  async create(createPostDto: CreatePostDto): Promise<Post> {
    const createdCat = new this.postModel(createPostDto);
    return createdCat.save();
  }

  async findAll(): Promise<Post[]> {
    return this.postModel.find().exec();
  }
}
