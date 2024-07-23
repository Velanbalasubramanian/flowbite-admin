import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Register04Component } from './register-04.component';

describe('Register04Component', () => {
  let component: Register04Component;
  let fixture: ComponentFixture<Register04Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Register04Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Register04Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
