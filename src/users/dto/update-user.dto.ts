import { IsEmail, IsNotEmpty, IsNumber, IsOptional, IsString, Max, MinLength } from "class-validator";


export class UpdateUserDto{

    @IsOptional()
    @IsEmail()
    email?: string;

    @IsOptional()
    @IsString()
    @MinLength(6)
    password?: string;

    @IsOptional()
    @IsString()
    name?: string;

    @IsOptional()
    @IsNumber()
    age?: Number;


}