import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgotPw01Component } from './forgot-pw01.component';

describe('ForgotPw01Component', () => {
  let component: ForgotPw01Component;
  let fixture: ComponentFixture<ForgotPw01Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ForgotPw01Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForgotPw01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
