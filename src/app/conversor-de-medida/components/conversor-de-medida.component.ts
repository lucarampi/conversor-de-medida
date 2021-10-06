import { Component, OnInit, ViewChild } from '@angular/core';
import { ConversorService, MedidaService } from '../services';
import { Conversao, Medida } from '../models';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-conversor-de-medida',
  templateUrl: './conversor-de-medida.component.html',
  styleUrls: ['./conversor-de-medida.component.css']
})
export class ConversorDeMedidaComponent implements OnInit {

  medidas: any;
  conversao: Conversao = new Conversao('m', 'mm', 0, 0)
  tipos: string[]
  tipo: string

  @ViewChild("conversaoForm", { static: true }) conversaoForm: NgForm;

  constructor(private medidaService: MedidaService, private conversaoService: ConversorService) { }

  ngOnInit(): void {
    this.listaTipos();
    this.tipo = "length"
    this.listaUnidades()
  }

  converter(): void {
    this.conversao.valor_saida = Number(this.conversaoService.converter(this.conversao));
  }
  trocarUnidade(): void {
    let { nova_entrada, nova_saida } = JSON.parse(this.conversaoService.trocar(this.conversao.medidaDe, this.conversao.medidaPara));
    this.conversao.medidaDe = nova_entrada;
    this.conversao.medidaPara = nova_saida;
  }

  trocarValor(): void{
    this.conversao.valor_entrada = this.conversao.valor_saida
  }

  listaUnidades(): void {
      this.medidas = this.conversaoService.listarTodos(this.tipo)
      this.conversao.medidaDe=this.medidas[0].abbr
      this.conversao.medidaPara=this.medidas[1].abbr
  }

  listaTipos(): void {
    this.tipos = this.conversaoService.grandezas()
  }
}
