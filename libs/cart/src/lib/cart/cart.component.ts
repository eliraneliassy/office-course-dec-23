import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BooksComponent } from '@office/books';
import { CartService } from '@office/cart-state';

@Component({
  selector: 'lib-cart',
  standalone: true,
  imports: [CommonModule, BooksComponent],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CartComponent {
  cartService = inject(CartService);

  cartBooks = this.cartService.cart;
}
