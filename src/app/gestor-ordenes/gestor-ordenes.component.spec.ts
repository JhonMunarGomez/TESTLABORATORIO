import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestorOrdenesComponent } from './gestor-ordenes.component';

describe('GestorOrdenesComponent', () => {
  let component: GestorOrdenesComponent;
  let fixture: ComponentFixture<GestorOrdenesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestorOrdenesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestorOrdenesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
