import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Book } from '@office/books';


@Injectable({
  providedIn: 'root',
})
export class FeedService {
  httpClient = inject(HttpClient);

  BASE_URL = `https://www.googleapis.com/books/v1/volumes`;

  getBooks(query: string): Observable<Book[]> {
    let params = new HttpParams();
    params = params.append('q', query);
    return this.httpClient.get<any>(`${this.BASE_URL}`, { params }).pipe(
      map((res) => res.items),
      map((items: any[]) =>
        items.map((item) => ({
          id: item.id,
          title: item.volumeInfo.title,
          imageUrl: item.volumeInfo.imageLinks.thumbnail,
          description: item.volumeInfo.description,
          pageCount: item.volumeInfo.pageCount,
        }))
      )
    );
  }
}
