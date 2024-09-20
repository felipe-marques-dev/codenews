import { ClassSerializerInterceptor, Injectable } from '@nestjs/common';
import { PrismaService } from '../database/prisma.service';
import { User, Post,  Prisma } from '@prisma/client';


@Injectable()
export class PostService{
    constructor ( private prisma: PrismaService){}


    // pega todos os posts
    async posts(params:{
        skip?: number;
        take?: number;
        cursor?: Prisma.PostWhereUniqueInput;
        orderBy?: Prisma.PostOrderByWithRelationInput;
    }): Promise<Post[]>{
        const {skip, take, cursor, orderBy} = params;
        return this.prisma.post.findMany({
            skip,
            take,
            cursor,
            orderBy,
        });
    }

    // cria posts
    async createPost(title: string, content: string, published: boolean, authorId: number){
        return this.prisma.post.create({
            data: {
                title,
                content,
                published,
                authorId
            }
        })
    }

    async deletePostById(id: number ){
        return this.prisma.post.delete({
            where: {id: id}
        })
    }



}