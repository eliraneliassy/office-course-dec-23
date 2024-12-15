import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CartService } from '@office/cart-state';
import { AuthStateService } from '../../libs/auth-state/src/lib/auth-state.service';
import { map, Observable } from 'rxjs';



@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  cartService = inject(CartService);
  authService = inject(AuthStateService);

  numberOfItemsInCart$= this.cartService.getNumberOfItemsInCart();

  isAuth$: Observable<boolean> = this.authService.getUser()
    .pipe(
      map(user => !!user)
    )
}
