import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResetPw03Component } from './reset-pw03.component';

describe('ResetPw03Component', () => {
  let component: ResetPw03Component;
  let fixture: ComponentFixture<ResetPw03Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResetPw03Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResetPw03Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
