import { ApiProperty } from '@nestjs/swagger';
import { IsAlphanumeric, IsEmail, MaxLength } from 'class-validator';

export class CreateUserDto {
  @ApiProperty()
  @IsAlphanumeric()
  @MaxLength(20)
  name: string;
  @ApiProperty({ required: false, example: 'qolam@yopmail.com' })
  @IsEmail()
  email?: string;
}
