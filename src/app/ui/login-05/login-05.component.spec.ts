import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Login05Component } from './login-05.component';

describe('Login05Component', () => {
  let component: Login05Component;
  let fixture: ComponentFixture<Login05Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Login05Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Login05Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
