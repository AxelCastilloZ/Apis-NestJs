import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
private Users:any[]=[];

getAllUsers(){
    return this.Users;
}

getUsersById(id: Number){
    const user=this.Users.find(user=>user.id===id);
    if(!user){
        return new NotFoundException('No se encontro el usuario');
    }
    return user;

}


createUser(user: CreateUserDto){
     this.Users.push({
        ...user,
    id:this.Users.length+1});

     return user;
}

updateUser(user: UpdateUserDto){
return 'Editando';
}


}
