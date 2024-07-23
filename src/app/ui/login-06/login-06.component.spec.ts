import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Login06Component } from './login-06.component';

describe('Login06Component', () => {
  let component: Login06Component;
  let fixture: ComponentFixture<Login06Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Login06Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Login06Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
