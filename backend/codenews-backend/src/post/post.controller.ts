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
  import { CreatePost } from 'src/dtos/create-post-body';

@Controller('post')
export class PostController{

    constructor(
        private readonly postService: PostService,
    ){}

    @Get('allpost')
    async getAllPosts(): Promise<PostModel[]>{
        return this.postService.posts({})
    }

    @Post('create-post')
    async postCreate(
        @Body() postData: CreatePost,
    ): Promise<PostModel>{
        const {title, content, published, authorId } = postData
        return this.postService.createPost(
        title,
        content,
        published,
        authorId,
        )
    }

    @Delete('delete-post/:id')
    async postDelete(
        @Param('id') id: string
    ): Promise<PostModel>{
        return this.postService.deletePostById(+id);
    }

  }
  

  