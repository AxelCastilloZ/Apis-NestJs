import { Body, Controller, Get, Param, ParseIntPipe, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('users')
export class UsersController {

constructor(private readonly usersService: UsersService){}

@Get()
getUsers(){
    return this.usersService.getAllUsers();
}

@Get(':id')
getUserById(@Param('id',ParseIntPipe) id:number){
return this.usersService.getUsersById(id);
}

@Post()

CreateUser(@Body() user: CreateUserDto){
    this.usersService.createUser(user);

    return user;
}

}
