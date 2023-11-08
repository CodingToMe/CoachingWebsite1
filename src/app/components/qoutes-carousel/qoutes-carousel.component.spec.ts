import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QoutesCarouselComponent } from './qoutes-carousel.component';

describe('QoutesCarouselComponent', () => {
  let component: QoutesCarouselComponent;
  let fixture: ComponentFixture<QoutesCarouselComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QoutesCarouselComponent]
    });
    fixture = TestBed.createComponent(QoutesCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
