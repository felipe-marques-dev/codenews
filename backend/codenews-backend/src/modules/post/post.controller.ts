import {
    Controller,
    Get,
    Param,
    Post,
    Body,
    Put,
    Delete,
    UseInterceptors,
    UploadedFile,
    Res,
    ValidationPipe,
  } from '@nestjs/common';

import { PostService } from './post.service';
import { Prisma, Post as PostModel} from '@prisma/client';
import { CreatePostDto } from './dto/create-post-body';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { v4 as uuidv4 } from 'uuid';
import { extname } from 'path';

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
    @UseInterceptors(FileInterceptor('image', {
    storage: diskStorage({
      destination: './uploads', // Pasta onde as imagens serão salvas
      filename: (req, file, cb) => {
        const uniqueSuffix = uuidv4() + extname(file.originalname); // Gera um nome único para o arquivo
        cb(null, uniqueSuffix);
        },
     }),
    }))
    async createPost(
        @UploadedFile() file: Express.Multer.File,
        @Body() createPostDto: CreatePostDto,
        ) {
        if (!file) {
            return { message: 'No file uploaded' };
        }
        // Cria o novo post com os dados do DTO e a URL da imagem
        const newPost = await this.postService.createPost({
            ...createPostDto, // Utilize createPostDto aqui
            imageUrl: file.path,
        });

        return newPost;
        }


    @Get(':id')
    async findOne(@Param('id') id: string ): Promise<PostModel>{
        const postId = parseInt(id);
        return this.postService.findOne(postId)
    }


    @Delete(':id')
    async delete(@Param('id') id: number ): Promise<PostModel>{
        return this.postService.deletePost(id);
    }

  }
  

  