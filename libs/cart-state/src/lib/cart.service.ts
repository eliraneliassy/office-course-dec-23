import { Injectable } from '@angular/core';
import { Book } from '@office/books';
import { BehaviorSubject, map, Observable, take } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cart$: BehaviorSubject<Book[]> = new BehaviorSubject<Book[]>([]);

  getCart(): Observable<Book[]> {
    return this.cart$.asObservable();
  }

  getNumberOfItemsInCart(): Observable<number> {
    return this.cart$.pipe(map(cart => cart.length));
  }

  addToCart(book: Book) {
    // this.cart.push(book);
    const currentCart = this.cart$.value;
    currentCart.push(book);
    this.cart$.next(currentCart);
  }

  removeFromCart(book: Book) {
    // this.cart = this.cart.filter(item => item.id !== book.id);
    const currentCart = this.cart$.value;
    currentCart.splice(currentCart.indexOf(book), 1);
    this.cart$.next(currentCart);
  }
}
