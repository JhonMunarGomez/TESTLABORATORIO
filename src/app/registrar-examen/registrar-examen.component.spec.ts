import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarExamenComponent } from './registrar-examen.component';

describe('RegistrarExamenComponent', () => {
  let component: RegistrarExamenComponent;
  let fixture: ComponentFixture<RegistrarExamenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrarExamenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrarExamenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
