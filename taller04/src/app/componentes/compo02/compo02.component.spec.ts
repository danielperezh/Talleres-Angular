import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Compo02Component } from './compo02.component';

describe('Compo02Component', () => {
  let component: Compo02Component;
  let fixture: ComponentFixture<Compo02Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Compo02Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Compo02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
