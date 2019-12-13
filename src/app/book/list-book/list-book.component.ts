import { Component, OnInit } from '@angular/core';
import { Book } from '../book.model';

@Component({
  selector: 'app-list-book',
  templateUrl: './list-book.component.html',
  styleUrls: ['./list-book.component.css']
})
export class ListBookComponent implements OnInit {

  books: Book [] = [{name: 'Pyhton', email: 'fk@gmail.com', author: 'Faisal', price: '22'},
                   {name: 'C++', email: 'meg@gmail.com', author: 'Megha', price: '10'},
                   {name: 'Angular', email: 'chandu@gmail.com', author: 'Chandni', price: '7'}];
  
  constructor() { }

  ngOnInit() {
    console.log(this.books);
  }

}
