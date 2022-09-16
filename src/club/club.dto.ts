import {IsNotEmpty, IsString, Length, IsUrl} from 'class-validator';
export class ClubDto {
    @IsString()
    @IsNotEmpty()
    @Length(5, 70)
    readonly name: string;
    
    @IsString()
    @IsNotEmpty()
    @IsUrl()
    readonly image: string;
    
    @IsString()
    @IsNotEmpty()
    readonly dateCreate: Date;
    
    @IsString()
    @IsNotEmpty()
    @Length(10, 100)
    readonly description: string;
}
