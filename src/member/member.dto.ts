import {IsNotEmpty, IsString, Length, IsEmail} from 'class-validator';
export class MemberDto {
    @IsString()
    @IsNotEmpty()
    @Length(5, 70)
    readonly name: string;

    @IsNotEmpty()
    @IsEmail()
    readonly email: string;
    
    @IsString()
    @IsNotEmpty()
    readonly dateBirth: Date;
}
