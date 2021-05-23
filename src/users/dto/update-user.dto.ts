import {
  IsEmail,
  IsString,
  IsNotEmpty,
  IsOptional,
  IsPhoneNumber,
} from 'class-validator';

export class UpdateUserDto {
  @IsNotEmpty()
  @IsOptional()
  @IsPhoneNumber()
  phone: string;

  @IsEmail()
  @IsOptional()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  surname: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  middlename: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  firstname: string;
}
