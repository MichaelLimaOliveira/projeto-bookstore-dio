import { Component, Input, OnInit } from '@angular/core';
import { Book, BooksResponse } from 'src/app/models/books';
import { BookListServiceService } from 'src/app/services/book-list-service.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  books: Book[] = [];
  viewBooks: Book[] = [];

  @Input() filterBook: string = '';
  constructor(private bookListServiceService: BookListServiceService) { 
  }

  ngOnInit(): void {
    this.loadBooks()
  }

  loadBooks() {
    this.bookListServiceService.getBooks().subscribe((result ) => {
      this.books = result.books;
      this.viewBooks = this.books;
    })
  }

    returnFilterTitleBook(filterBook: string) {
      this.viewBooks = this.books.filter(element => element.title.includes(filterBook));
    }

}
