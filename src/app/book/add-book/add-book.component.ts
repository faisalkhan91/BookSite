import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BookapiService } from 'src/app/bookapi.service'
import { Book } from '../book.model';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {

  @ViewChild('f', {static:true}) signupForm: NgForm;

  book: Book;

  constructor(private BookapiService: BookapiService) { }

  ngOnInit() {
    
    this.book.name = this.signupForm.value.name;
    this.book.author = this.signupForm.value.author;
    this.book.email = this.signupForm.value.email;
    this.book.price = this.signupForm.value.price;

    console.log(this.book);
    this.BookapiService.addbook(this.book);

  }

}
