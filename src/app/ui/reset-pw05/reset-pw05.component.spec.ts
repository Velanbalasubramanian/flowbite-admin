import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResetPw05Component } from './reset-pw05.component';

describe('ResetPw05Component', () => {
  let component: ResetPw05Component;
  let fixture: ComponentFixture<ResetPw05Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResetPw05Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResetPw05Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
