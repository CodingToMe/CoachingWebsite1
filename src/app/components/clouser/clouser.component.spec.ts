import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClouserComponent } from './clouser.component';

describe('ClouserComponent', () => {
  let component: ClouserComponent;
  let fixture: ComponentFixture<ClouserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClouserComponent]
    });
    fixture = TestBed.createComponent(ClouserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
