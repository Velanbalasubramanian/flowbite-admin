import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResetPw02Component } from './reset-pw02.component';

describe('ResetPw02Component', () => {
  let component: ResetPw02Component;
  let fixture: ComponentFixture<ResetPw02Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResetPw02Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResetPw02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
