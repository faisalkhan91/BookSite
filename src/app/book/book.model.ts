export class Book
{
    name: string;
    author: string;
    email: string;
    price: string;

    constructor(name: string, author: string, email: string, price: string)
    {
        this.name = name;
        this.author = author;
        this.email = email;
        this.price = price;
    }
}