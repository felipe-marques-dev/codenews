import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { PrismaService } from './database/prisma.service';
import { UserService } from './modules/user/user.service';
import { PostService } from './modules/post/post.service';
import { UserModule } from './modules/user/user.module';
import { PostModule } from './modules/post/post.module';



@Module({
  imports: [UserModule, PostModule],
  controllers: [AppController],
  providers: [UserService, PostService,PrismaService],
})
export class AppModule {}
