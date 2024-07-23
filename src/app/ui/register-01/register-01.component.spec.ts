import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Register01Component } from './register-01.component';

describe('Register01Component', () => {
  let component: Register01Component;
  let fixture: ComponentFixture<Register01Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Register01Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Register01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
