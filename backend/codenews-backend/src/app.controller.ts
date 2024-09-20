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

@Controller('/') // prefixo de rotas
export class AppController {

}

// test!
// test2!
/* @Post('hello')
  async getHello(@Body() body: createMember)  {
    const {name, email} = body

    const member = await this.prisma.user.create({
      data: {
        email,
        name,
      },
    })
    

    return {
      member
  }
    }
  */

