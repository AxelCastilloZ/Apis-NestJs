import { BadRequestException, Controller, Get, Query, UseGuards } from '@nestjs/common';
import { ValidateuserPipe } from './pipes/validateuser/validateuser.pipe';
import { AuthGuard } from './guards/auth/auth.guard';

@Controller()
export class ProjectsController {




    @Get('/greet')
    @UseGuards(AuthGuard)
    greet(@Query(ValidateuserPipe) query: {name:string, age:number}){
      console.log(typeof query.age)
      console.log(typeof query.name)
      return `Hello ${query.name}, you are ${query.age} `;
    }




}
