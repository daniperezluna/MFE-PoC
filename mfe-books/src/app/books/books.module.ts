import { NgModule } from '@angular/core';

import { HttpClientModule } from "@angular/common/http";
import { HttpClientInMemoryWebApiModule} from "angular-in-memory-web-api";
import { WelcomeBooksComponent } from "../welcome-books/welcome-books.component";
import { BookListComponent } from "../book-list/book-list.component";
import { BookDetailsComponent } from "../book-details/book-details.component";
import { InMemoryDataService } from "../services/in-memory-data.service";
import { BooksService } from "../services/books.service";
import { BooksRoutingModule } from "./books-routing.module";
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [
    WelcomeBooksComponent,
    BookListComponent,
    BookDetailsComponent
  ],
  imports: [
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    ),
    CommonModule,
    BooksRoutingModule
  ],
  providers: [
    BooksService
  ]
})
export class BooksModule { }
