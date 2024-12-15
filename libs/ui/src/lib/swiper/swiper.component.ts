import { AfterViewInit, ChangeDetectionStrategy, Component, inject, Input, TemplateRef } from '@angular/core';
import { CommonModule, DOCUMENT } from '@angular/common';


@Component({
  selector: 'lib-swiper',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './swiper.component.html',
  styleUrl: './swiper.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SwiperComponent implements AfterViewInit {

  @Input() slides: string[] = [];
  @Input() slidesTemplate?: TemplateRef<any>;

  slidePositions: number[] = [];

  document = inject(DOCUMENT);

  currentItem = 0;

  nav = {
    prev: () => this.slide(-1),
    next: () => this.slide(+1),
  }

  ngAfterViewInit(): void {
    this.slidePositions = [];
    this.document.querySelectorAll<HTMLElement>('.slide')
      .forEach((div: HTMLElement)=> {
        this.slidePositions.push(div.offsetLeft)
    })
  }

  slide(direction: number) {
    this.currentItem += direction;

    if(this.currentItem > this.slidePositions.length -1) {
      this.currentItem = 0;
    }

    if(this.currentItem <0) {
      this.currentItem = this.slidePositions.length - 1;
    }

    this.document.querySelector('.slider')?.scrollTo({
      left: this.slidePositions[this.currentItem],
      behavior: 'smooth',
    })
  }
}
