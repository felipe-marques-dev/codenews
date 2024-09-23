import { IsString, IsNotEmpty, IsOptional, isNotEmpty } from 'class-validator';

export class CreatePostDto {
  @IsString()
 
  title: string;

  @IsString()
  @IsOptional()
  content?: string;

  @IsNotEmpty()
  published: boolean;

  author: string;

  authorId: number;
  
  // Supondo que você tenha um autor associado ao post
  

}
