import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Book } from '../book.interface';

@Component({
  selector: 'lib-books',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './books.component.html',
  styleUrl: './books.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BooksComponent {
  @Input() book?: Book;

  @Output() addToCart: EventEmitter<Book> = new EventEmitter();

  addToCartHandler() {
    this.addToCart.emit(this.book)
  }
}
