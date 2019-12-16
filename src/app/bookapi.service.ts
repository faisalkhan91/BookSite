import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Book } from './book/book.model';

@Injectable({
  providedIn: 'root'
})
export class BookapiService {
  books: Book[] = [];

  constructor(private http: HttpClient) { }

  addbook(book: Book)
  {
      this.http.post('https://bookstore-1c804.firebaseio.com/book.json', book).subscribe(
      response=>{console.log(response)}),
      error=>{console.error();
      };
  }

  listbook() : Book[]
  {
      this.http.get<Book[]>('https://bookstore-1c804.firebaseio.com/book.json').subscribe(
      booklistResponse=>{
        for(let book in booklistResponse)
        {
          this.books.push(booklistResponse[book]);
        }
      }),
      error=>{console.error();
      };
      return this.books;
  }

  getBook(id: number): Book
  {
    return this.books[id];
  }

}
