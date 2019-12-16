import { Component, OnInit } from '@angular/core';
import { Book } from '../book.model';
import { BookapiService } from 'src/app/bookapi.service'

@Component({
  selector: 'app-list-book',
  templateUrl: './list-book.component.html',
  styleUrls: ['./list-book.component.css']
})
export class ListBookComponent implements OnInit {

  books: Book [] = [{name: 'Pyhton', email: 'fk@gmail.com', author: 'Faisal', price: '22'},
                   {name: 'C++', email: 'meg@gmail.com', author: 'Megha', price: '10'},
                   {name: 'Angular', email: 'chandu@gmail.com', author: 'Chandni', price: '7'}];
  
  constructor(private BookapiService: BookapiService) { }

  ngOnInit() {
    //console.log(this.books);
    //console.log(this.BookapiService.listbook());
    this.books = this.BookapiService.listbooks();
    //console.log(this.books);
  }

}
