import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Register05Component } from './register-05.component';

describe('Register05Component', () => {
  let component: Register05Component;
  let fixture: ComponentFixture<Register05Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Register05Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Register05Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
