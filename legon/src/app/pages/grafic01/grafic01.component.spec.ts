import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Grafic01Component } from './grafic01.component';

describe('Grafic01Component', () => {
  let component: Grafic01Component;
  let fixture: ComponentFixture<Grafic01Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Grafic01Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Grafic01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
