import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParcheseCardComponent } from './parchese-card.component';

describe('ParcheseCardComponent', () => {
  let component: ParcheseCardComponent;
  let fixture: ComponentFixture<ParcheseCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ParcheseCardComponent]
    });
    fixture = TestBed.createComponent(ParcheseCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
