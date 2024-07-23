import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResetPw04Component } from './reset-pw04.component';

describe('ResetPw04Component', () => {
  let component: ResetPw04Component;
  let fixture: ComponentFixture<ResetPw04Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResetPw04Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResetPw04Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
