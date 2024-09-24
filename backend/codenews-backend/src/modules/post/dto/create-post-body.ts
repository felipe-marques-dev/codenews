import { IsString, IsNotEmpty, IsOptional, IsBoolean } from 'class-validator';

export class CreatePostDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsOptional()
  content?: string;

  @IsBoolean()
  published?: boolean;

  @IsString()
  authorEmail: string;

  @IsString()
  author: string;

  @IsString()
  authorId: string;

  @IsString()
  imageUrl?: string;
}
