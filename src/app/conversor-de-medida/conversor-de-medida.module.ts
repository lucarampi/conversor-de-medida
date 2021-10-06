import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConversorDeMedidaComponent } from './components';
import { ConversorService, MedidaService } from './services';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ConversorDeMedidaComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    ConversorDeMedidaComponent
  ],
  providers: [
    MedidaService,
    ConversorService
  ]
})
export class ConversorDeMedidaModule { }
