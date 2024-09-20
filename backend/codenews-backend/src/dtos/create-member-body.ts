import { IsNotEmpty, Length } from "class-validator";

export class CreateMember {
    @IsNotEmpty()
    @Length(2, 100)
    name: string;

    @IsNotEmpty({
        message: 'O email eh obrigatorio',
    })
    @Length(7, 100)
    email: string;
}