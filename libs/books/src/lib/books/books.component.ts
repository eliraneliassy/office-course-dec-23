import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Book } from '../book.interface';
import { ButtonComponent } from '@office/ui';

@Component({
  selector: 'lib-books',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  templateUrl: './books.component.html',
  styleUrl: './books.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BooksComponent {
  @Input() book?: Book;

  @Output() addToCart: EventEmitter<Book> = new EventEmitter();
  @Output() removeFromCart: EventEmitter<Book> = new EventEmitter();

  addToCartHandler() {
    this.addToCart.emit(this.book);
  }

  removeFromCartHandler(){
    this.removeFromCart.emit(this.book);
  }
}
