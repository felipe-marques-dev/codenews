import { IsString, IsNotEmpty, IsOptional, isNotEmpty, IsBoolean } from 'class-validator';

export class CreatePostDto {
  @IsString()
 
  title: string;

  @IsString()
  @IsOptional()
  content?: string;

  @IsNotEmpty()
  @IsBoolean()
  published?: boolean;

  authorEmail: string;
  author: string;
  authorId: string;
  imageUrl?: string;
  // Supondo que você tenha um autor associado ao post
  

}
