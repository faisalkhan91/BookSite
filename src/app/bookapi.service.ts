import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Book } from './book/book.model';

@Injectable({
  providedIn: 'root'
})
export class BookapiService {

  constructor(private http: HttpClient) { }

  addbook(book: Book)
  {
    this.http.post('https://bookstore-1c804.firebaseio.com/book.json', book).subscribe(
      response=>{console.log(response)}),
      error=>{console.error();
    };
  }

}
