import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { PrismaService } from './database/prisma.service';
import { UserService } from './modules/user/user.service';
import { PostService } from './modules/post/post.service';
import { UserModule } from './modules/user/user.module';
import { PostModule } from './modules/post/post.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
@Module({
  imports: [
    UserModule,
    PostModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'uploads'), // Caminho da pasta uploads
      serveRoot: '/uploads/', // URL base para acessar os arquivos
    }),
  ],
  controllers: [AppController],
  providers: [UserService, PostService, PrismaService],
})
export class AppModule {
}