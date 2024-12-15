import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwiperComponent } from '@office/ui';

@Component({
  selector: 'lib-swiper-feed',
  standalone: true,
  imports: [CommonModule, SwiperComponent],
  templateUrl: './swiper-feed.component.html',
  styleUrl: './swiper-feed.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SwiperFeedComponent {
  // slides = [
  //   `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOG5TM1EovYcHRS_Uoi7lufuMrQ3slzfmoLg&s`,
  //   `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVN0M_9rctotKkOYPYPNwx6CgHSwWxuMcK5A&s`,
  //   `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdOiO42oAtU-QUUT-BuBa0nqRSS-DwRMuFuw&s`,
  // ];

  slides = ['Eliran', 'Moshe', 'Maxim'];
}
