import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Compo03Component } from './compo03.component';

describe('Compo03Component', () => {
  let component: Compo03Component;
  let fixture: ComponentFixture<Compo03Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Compo03Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Compo03Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
