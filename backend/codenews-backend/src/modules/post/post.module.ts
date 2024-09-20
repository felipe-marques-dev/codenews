import { Module } from '@nestjs/common';
import { PostController } from './post.controller';
import { PrismaService } from '../../database/prisma.service';
import { PostService } from './post.service';


@Module({
  controllers: [PostController],
  providers: [PostService, PrismaService],
  exports: [PostService]
})
export class UserModule {}
