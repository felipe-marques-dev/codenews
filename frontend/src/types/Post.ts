export interface Post{
    id: number;
    title: string;
    content: string;
    published: boolean;
    author: string;
    authorId?: number;
    imageUrl?: string;
    name?: Author;
    
}

export interface Author {
    name: string;
    // outros campos de autor, se houver
  }