import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { BooksResponse } from '../models/books';


@Injectable({
  providedIn: 'root'
})
export class BookListServiceService {
   apiUrl = 'http://private-anon-cb66558758-bookstore.apiary-mock.com/books'

  constructor(private httpClient: HttpClient) { }

  getBooks(): Observable<BooksResponse> {
    return this.httpClient.get<BooksResponse>(this.apiUrl);
  }
  
}
