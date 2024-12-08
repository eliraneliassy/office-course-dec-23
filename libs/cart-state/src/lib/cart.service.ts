import { Injectable } from '@angular/core';
import { Book } from '@office/books';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart: Book[] = [];

  addToCart(book: Book) {
    this.cart.push(book);
  }

  removeFromCart(book: Book) {
    this.cart = this.cart.filter(item => item.id !== book.id);
  }
}
