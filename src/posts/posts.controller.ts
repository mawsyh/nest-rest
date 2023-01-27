import { Controller, Get, Post } from '@nestjs/common';
import { Body, Param } from '@nestjs/common/decorators';
import { ApiTags } from '@nestjs/swagger';
import { CreatePostDto } from './dto/create-post.dto';
import { PostsService } from './posts.service';
import { PostClass } from './schemas/post.schema';

@ApiTags('Posts')
@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Get()
  getAllPosts(): Promise<PostClass[]> {
    return this.postsService.findAll();
  }

  @Get(':id')
  findPostById(@Param() id: string): Promise<PostClass> {
    return this.postsService.findById(id);
  }

  @Post()
  createPost(
    @Body() body: CreatePostDto,
  ): Promise<{ msg: string; post: PostClass }> {
    return this.postsService.create(body);
  }
}
