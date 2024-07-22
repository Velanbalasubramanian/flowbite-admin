import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Login03Component } from './login-03.component';

describe('Login03Component', () => {
  let component: Login03Component;
  let fixture: ComponentFixture<Login03Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Login03Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Login03Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
