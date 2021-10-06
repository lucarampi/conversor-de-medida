import { Injectable } from '@angular/core';
import { Conversao, Medida } from '../models';
import * as convert_units from 'convert-units'

@Injectable()
export class ConversorService {

  constructor() { }

  converter(valor: Conversao): string {
    return convert_units(valor.valor_entrada).from(valor.medidaDe).to(valor.medidaPara);
  }

  grandezas(): string[] {
    return convert_units().measures()
  }

  listarTodos(type: string): string {
    let lista = convert_units().list(type)
    return lista
  }

  trocar(x: string, y: string): string {
    return `{"nova_entrada":"${y}","nova_saida":"${x}"}`
  }
}
