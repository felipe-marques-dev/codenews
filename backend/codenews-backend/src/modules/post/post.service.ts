import { ClassSerializerInterceptor, Injectable } from '@nestjs/common';
import { PrismaService } from '../../database/prisma.service';
import { CreatePostDto } from './dto/create-post-body';
import { PostRepository } from './repository/post.repository';


@Injectable()
export class PostService{
   constructor (
    private readonly postRepository: PostRepository
   ){} 

   async findAll(){
    return this.postRepository.findAll();
   }

   async findOne(id: number){
    return this.postRepository.findOne(id);
   }

   async createPost(createPostDto: CreatePostDto){
    return this.postRepository.createPost(createPostDto);
   }

   async updatePost(id: number, data: Partial<CreatePostDto>){
    return this.postRepository.updatePost(id, data);
   }

   async deletePost(id: number){
    return this.postRepository.deletePost(id);
   }


}