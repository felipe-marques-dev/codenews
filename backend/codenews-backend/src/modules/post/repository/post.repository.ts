import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../database/prisma.service';
import { CreatePostDto } from '../dto/create-post-body';
@Injectable()
export class PostRepository {
  constructor(private readonly prisma: PrismaService) {}



  async findAll() {
    return this.prisma.post.findMany({
      include: {
        author: true,
      }
    });
  }

  async findOne(id: number) {
    return this.prisma.post.findUnique({
      where: { id },
    });
  }

  async createPost(createPostDto: CreatePostDto) {
    const {authorId, ...postData} = createPostDto
    return this.prisma.post.create({
      data: {
        ...postData,
        author: {
          connect: { id: authorId},
        }
      }
    });
  }

  async updatePost(id: number, updatePostDto: Partial<CreatePostDto>) {
    const {authorId, ...postData} = updatePostDto;
    return this.prisma.post.update({
      where: { id },
      data:{
        ...postData,
        ...authorId && { // atualiza o autor somente se um novo id for passado
          author: {
            connect: { id: authorId}
          }
        }
      },
    });
  }

  async deletePost(id: number) {
    return this.prisma.post.delete({
      where: { id },
    });
  }
}