import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from './book.interface';

@Injectable({
  providedIn: 'root'
})
export class FeedService {

  httpClient = inject(HttpClient);

  BASE_URL = `https://www.googleapis.com/books/v1/volumes`;

  getBooks(query: string): Observable<Book[]> {
    let params = new HttpParams();
    params = params.append('q', query);
    return this.httpClient.get<Book[]>
      (`${this.BASE_URL}`, {params});
  }
}
