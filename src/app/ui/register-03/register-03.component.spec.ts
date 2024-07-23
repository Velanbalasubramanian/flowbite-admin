import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Register03Component } from './register-03.component';

describe('Register03Component', () => {
  let component: Register03Component;
  let fixture: ComponentFixture<Register03Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Register03Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Register03Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
