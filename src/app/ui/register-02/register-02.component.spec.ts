import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Register02Component } from './register-02.component';

describe('Register02Component', () => {
  let component: Register02Component;
  let fixture: ComponentFixture<Register02Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Register02Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Register02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
