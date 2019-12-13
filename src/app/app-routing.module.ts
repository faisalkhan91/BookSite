import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookComponent } from './book/book.component';
import { HomeComponent } from './home/home.component';
import { AddBookComponent } from './book/add-book/add-book.component';
import { ListBookComponent } from './book/list-book/list-book.component';


const routes: Routes = [
  {path: '', redirectTo: '', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'book', component: BookComponent, children: []},
  {path: 'book/addbook', component: AddBookComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
