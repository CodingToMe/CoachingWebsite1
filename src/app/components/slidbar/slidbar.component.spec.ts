import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlidbarComponent } from './slidbar.component';

describe('SlidbarComponent', () => {
  let component: SlidbarComponent;
  let fixture: ComponentFixture<SlidbarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SlidbarComponent]
    });
    fixture = TestBed.createComponent(SlidbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
