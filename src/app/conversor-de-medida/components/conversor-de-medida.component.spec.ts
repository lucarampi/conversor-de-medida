import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConversorDeMedidaComponent } from './conversor-de-medida.component';

describe('ConversorDeMedidaComponent', () => {
  let component: ConversorDeMedidaComponent;
  let fixture: ComponentFixture<ConversorDeMedidaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConversorDeMedidaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConversorDeMedidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
