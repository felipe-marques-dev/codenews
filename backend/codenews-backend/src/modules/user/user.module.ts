import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { PrismaService } from '../../database/prisma.service';
import { UserService } from '../user/user.service';

@Module({
  controllers: [UserController],
  providers: [UserService, PrismaService],
  exports: [UserService]
})
export class UserModule {}
