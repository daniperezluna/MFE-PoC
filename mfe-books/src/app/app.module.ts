import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BooksModule } from "./books/books.module";
import { BrowserModule } from "@angular/platform-browser";
import { BooksWrapperComponent } from './books-wrapper/books-wrapper.component';

@NgModule({
  declarations: [
    AppComponent,
    BooksWrapperComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BooksModule
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
