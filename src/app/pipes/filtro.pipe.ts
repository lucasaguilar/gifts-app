import { Pipe, PipeTransform } from '@angular/core';
import { forEachChild, isTemplateExpression } from 'typescript';
import { Country } from '../models/country.model';

@Pipe({
  name: 'filtro',
})
export class FiltroPipe implements PipeTransform {
  private texto = '';

  transform(arreglo: any[], texto: string): any {
    console.log(arreglo);

    if (texto === '') {
      return null;
    }

    if (!arreglo) {
      return arreglo;
    }

    this.texto = texto.toLowerCase();

    // return arreglo.filter((item) => item.name.toLowerCase().includes(texto));
    return arreglo.filter((item) => this.checkCondition(item));
  }

  checkCondition(item) {
    console.log(item.name + '-' + item.capital);
    const nameCity =
      typeof item.name !== 'undefined' ? item.name.toLowerCase() : '';
    const nameCapital =
      typeof item.capital !== 'undefined' ? item.capital.toLowerCase() : '';

    if (nameCity.includes(this.texto) || nameCapital.includes(this.texto)) {
      return true;
    } else {
      return false;
    }
  }
}
