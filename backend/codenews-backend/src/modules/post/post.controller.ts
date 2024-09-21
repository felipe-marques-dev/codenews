import {
    Controller,
    Get,
    Param,
    Post,
    Body,
    Put,
    Delete,
    ValidationPipe,
  } from '@nestjs/common';

import { PostService } from './post.service';
import { Prisma, Post as PostModel} from '@prisma/client';
import { CreatePostDto } from './dto/create-post-body';
@Controller('post')
export class PostController{

    constructor(
        private readonly postService: PostService,
    ){}

    @Get('allpost')
    async findAll(): Promise<PostModel[]>{
        return this.postService.findAll();
    }

    @Post('create-post')
    async create(
        @Body() postData: CreatePostDto): Promise<PostModel>{
        return this.postService.createPost(postData)
    }

    @Get(':id')
    async findOne(@Param('id') id: number ): Promise<PostModel>{
        return this.postService.findOne(id)
    }


    @Delete(':id')
    async delete(@Param('id') id: number ): Promise<PostModel>{
        return this.postService.deletePost(id);
    }

  }
  

  