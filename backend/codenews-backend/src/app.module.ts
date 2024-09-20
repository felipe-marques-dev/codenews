import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { PrismaService } from './database/prisma.service';
import { UserService } from './user/user.service';
import { PostService } from './post/post.service';
import { UserModule } from './user/user.module';


@Module({
  imports: [UserModule],
  controllers: [AppController],
  providers: [UserService, PostService,PrismaService],
})
export class AppModule {}
