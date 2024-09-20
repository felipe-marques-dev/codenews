import { IsNotEmpty, Length } from "class-validator";

export class CreatePost {
    @IsNotEmpty({
        message: "Title can't be Empty!"
    })
    title: string;
    content: string;
    published: boolean;
    authorId: number;
}