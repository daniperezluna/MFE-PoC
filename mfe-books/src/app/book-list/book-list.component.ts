import { SharedBalanceService } from 'shared-balance';
import { Component, OnInit } from '@angular/core';
import { BooksService } from "../services/books.service";
import { Book } from "../model/book";

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {

  books: Book[];

  constructor(
    private bookService: BooksService,
    public sharedBalanceService: SharedBalanceService
  ) {
    this.books = [];
    this.sharedBalanceService.balance$;
  }

  ngOnInit(): void {
    this.bookService.getBooks().subscribe( bookList => {
      this.books = bookList;
    });
  }

}
