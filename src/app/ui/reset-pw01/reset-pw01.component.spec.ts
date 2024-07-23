import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResetPw01Component } from './reset-pw01.component';

describe('ResetPw01Component', () => {
  let component: ResetPw01Component;
  let fixture: ComponentFixture<ResetPw01Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResetPw01Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResetPw01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
