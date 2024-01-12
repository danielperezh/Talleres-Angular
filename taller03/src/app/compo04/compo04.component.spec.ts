import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Compo04Component } from './compo04.component';

describe('Compo04Component', () => {
  let component: Compo04Component;
  let fixture: ComponentFixture<Compo04Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Compo04Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Compo04Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
