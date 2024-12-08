import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { FeedService } from '../feed.service';
import { Book, BooksComponent } from '@office/books';
import { CartService } from '@office/cart-state';


@Component({
  selector: 'lib-feed',
  standalone: true,
  imports: [AsyncPipe, BooksComponent],
  templateUrl: './feed.component.html',
  styleUrl: './feed.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeedComponent {
  feedService = inject(FeedService);
  cartService = inject(CartService);

  books$ = this.feedService.getBooks('Angular');

  addToCart(book: Book) {
    this.cartService.addToCart(book);
  }
}
