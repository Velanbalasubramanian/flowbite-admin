import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Login04Component } from './login-04.component';

describe('Login04Component', () => {
  let component: Login04Component;
  let fixture: ComponentFixture<Login04Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Login04Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Login04Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
