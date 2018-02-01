import { Injectable } from "@angular/core";

@Injectable()
export class FormatterNumber {

  constructor(
  ) {

  }

  getNumberFormatted(number: any) {
    let options = { 
        minimumFractionDigits: 2 , 
        style: 'currency', 
        currency: 'BRL'
    }

    return number.toLocaleString('pt-BR', options);
  }

}