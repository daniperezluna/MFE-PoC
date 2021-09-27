import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksModule } from "./books/books.module";

const routes: Routes = [
  {
    path: "",
    loadChildren: () => BooksModule
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
