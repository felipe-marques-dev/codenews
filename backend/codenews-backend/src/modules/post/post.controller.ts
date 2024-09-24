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
    BadRequestException,
  } from '@nestjs/common';

import { PostService } from './post.service';
import { Prisma, Post as PostModel} from '@prisma/client';
import { CreatePostDto } from './dto/create-post-body';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { v4 as uuidv4 } from 'uuid';
import { extname, join } from 'path';

@Controller('post')
export class PostController{

    constructor(
        private readonly postService: PostService,
    ){}

    @Get('allpost')
    async findAll(): Promise<PostModel[]>{
        return this.postService.findAll();
    }

      // Método para obter a configuração de storage
    private getStorage() {
        return diskStorage({
        destination: './uploads', // Diretório onde os arquivos serão armazenados
        filename: (req, file, cb) => {
            const uniqueSuffix = `${Date.now()}-${file.originalname}`;
            cb(null, uniqueSuffix); // Salva o arquivo com um nome único
        },
        });
    }

    @Post('create-post')
    @UseInterceptors(FileInterceptor('image', { storage: diskStorage({
        destination: './uploads', // Diretório onde os arquivos serão armazenados
        filename: (req, file, cb) => {
            const uniqueSuffix = `${Date.now()}-${file.originalname}`;
            cb(null, uniqueSuffix); // Salva o arquivo com um nome único
        },
        }) }))
    async createPost(
        @UploadedFile() file: Express.Multer.File,
        @Body() createPostDto: CreatePostDto,
    ) {
        console.log('Arquivo recebido:', file); // verifica os arquivos recebidos

        if (!file) {
        throw new BadRequestException('No file uploaded');
        }

        // Normaliza a URL para o formato correto
        const normalizedFilePath = join('uploads', file.filename).replace(/\\/g, '/');

        const postData: CreatePostDto = {
        ...createPostDto,
        imageUrl: normalizedFilePath, // barras normais
        };

    console.log('Dados do post:', postData); // Verifica o que está sendo passado

    return await this.postService.createPost(postData);
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
  

  