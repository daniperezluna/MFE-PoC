import { Component, OnInit } from '@angular/core';
import { BooksService } from "../services/books.service";
import { Book } from "../model/book";
import { SharedBalanceService } from "shared-balance";

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {

  books: Book[];
  balance: number = 0;
  isLoggedIn: boolean = false;

  constructor(
    private bookService: BooksService,
    private sharedBalanceService: SharedBalanceService
  ) {
    this.books = [];
  }

  ngOnInit(): void {
    this.bookService.getBooks().subscribe( bookList => {
      this.books = bookList;
    });

    this.sharedBalanceService.getBalance().subscribe(balance => {
      this.balance = balance;
    });

    this.addLoginEventListener();
    this.addLogoutEventListener();
  }

  authenticate(e: any) {
    if( e && e.type === "mfe-login") {
      this.isLoggedIn = true;
    } else {
      this.isLoggedIn = false;
    }
  }

  private addLoginEventListener(): void {
    window.addEventListener('mfe-login', (e: any) => this.authenticate(e));
  }

  private addLogoutEventListener(): void {
    window.addEventListener('mfe-login:logout', (e: any) => this.authenticate(e))
  }
}
