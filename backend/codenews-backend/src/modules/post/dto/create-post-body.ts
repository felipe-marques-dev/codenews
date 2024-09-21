import { IsString, IsNotEmpty, IsOptional, isNotEmpty } from 'class-validator';

export class CreatePostDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsOptional()
  content?: string;

  @IsNotEmpty()
  published: boolean;

  @IsString()
  @IsOptional()
  authorId?: number; // Supondo que você tenha um autor associado ao post
}
