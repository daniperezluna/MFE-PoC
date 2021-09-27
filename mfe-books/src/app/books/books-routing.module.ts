import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {WelcomeBooksComponent} from "../welcome-books/welcome-books.component";
import {BookListComponent} from "../book-list/book-list.component";
import {BookDetailsComponent} from "../book-details/book-details.component";
import {BooksWrapperComponent} from "../books-wrapper/books-wrapper.component";

const routes: Routes = [
  {
    path: "",
    component: BooksWrapperComponent,
    children: [
      {
        path: "",
        component: WelcomeBooksComponent,
        pathMatch: "full"
      },
      {
        path: "booklist",
        children: [
          {
            path: "",
            component: BookListComponent
          },
          {
            path: ":id",
            component: BookDetailsComponent
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BooksRoutingModule { }
