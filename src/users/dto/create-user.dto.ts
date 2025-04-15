import { IsEmail, IsNotEmpty, IsNumber, IsString, Max, MinLength } from "class-validator";


export class CreateUserDto{

    @IsEmail()
    @IsNotEmpty()
    email: string;

    @IsString()
    @IsNotEmpty()
    password: string;

    @IsString()
    @IsNotEmpty()
    name: string;

    @IsNumber()
    @Max(100)
    age: number;


}