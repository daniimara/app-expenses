import { Injectable } from "@angular/core";

import { Globalization } from '@ionic-native/globalization';

@Injectable()
export class FormatterNumber {

  constructor(
    private globalization: Globalization
  ) {
  }

  getCurrencyFormatted(number: any) {
    return new Promise((resolve, reject) => {
      this.globalization.numberToString(number, { type: 'currency' })
      .then((res) => {
        resolve(res.value);
      }).catch((err) => {
        reject(err);
      });
    });
  }

}