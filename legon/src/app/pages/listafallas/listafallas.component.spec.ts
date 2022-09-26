import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListafallasComponent } from './listafallas.component';

describe('ListafallasComponent', () => {
  let component: ListafallasComponent;
  let fixture: ComponentFixture<ListafallasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListafallasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListafallasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
