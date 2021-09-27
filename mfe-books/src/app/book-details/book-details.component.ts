import { Component, OnInit } from '@angular/core';
import { Book } from "../model/book";
import { ActivatedRoute } from "@angular/router";
import { BooksService } from "../services/books.service";

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit {

  book: Book;

  constructor(
    private bookService: BooksService,
    private route: ActivatedRoute
  ) {
    this.book = {id: 0, title: ""};
  }

  ngOnInit(): void {
    this.bookService.getBookById(this.route.snapshot.params.id).subscribe( book => {
      this.book = book;
    });
  }

  getImageSrc(id: number) {
    return `http://localhost:5200/assets/images/${id}.jpg`;
  }

}
