import {
    Controller,
    Get,
    Param,
    Post,
    Body,
    Put,
    Delete,
    ValidationPipe,
  } from '@nestjs/common';
  import { UserService } from './user.service';
  import { Prisma, User, User as UserModel, } from '@prisma/client';
  import { CreateMember } from '../dtos/create-member-body';

@Controller('account')
export class UserController{
    constructor (
        private readonly userService: UserService,
    ){}

    @Post('create-user')
    async signupUser(
        @Body() userData: CreateMember,
    ): Promise<UserModel> {
        const {name, email} = userData
        return this.userService.createUser(
            name,
            email,
        );
    }

    @Get('alluser')
    async getAllUsers(): Promise<UserModel[]>{
        return this.userService.users({})
  }
}
