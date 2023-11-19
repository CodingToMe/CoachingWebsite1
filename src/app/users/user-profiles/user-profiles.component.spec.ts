import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserProfilesComponent } from './user-profiles.component';

describe('UserProfilesComponent', () => {
  let component: UserProfilesComponent;
  let fixture: ComponentFixture<UserProfilesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserProfilesComponent]
    });
    fixture = TestBed.createComponent(UserProfilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
