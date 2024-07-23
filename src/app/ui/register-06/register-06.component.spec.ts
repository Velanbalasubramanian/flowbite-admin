import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Register06Component } from './register-06.component';

describe('Register06Component', () => {
  let component: Register06Component;
  let fixture: ComponentFixture<Register06Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Register06Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Register06Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
