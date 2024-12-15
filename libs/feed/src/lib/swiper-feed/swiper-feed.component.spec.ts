import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SwiperFeedComponent } from './swiper-feed.component';

describe('SwiperFeedComponent', () => {
  let component: SwiperFeedComponent;
  let fixture: ComponentFixture<SwiperFeedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SwiperFeedComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SwiperFeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
