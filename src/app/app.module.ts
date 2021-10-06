import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ConversorDeMedidaModule } from './conversor-de-medida';


@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    ConversorDeMedidaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
