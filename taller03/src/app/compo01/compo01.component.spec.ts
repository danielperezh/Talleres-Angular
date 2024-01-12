import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Compo01Component } from './compo01.component';

describe('Compo01Component', () => {
  let component: Compo01Component;
  let fixture: ComponentFixture<Compo01Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Compo01Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Compo01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
