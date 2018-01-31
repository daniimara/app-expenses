import { Http } from "@angular/http";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import "rxjs/add/operator/map";

@Injectable()
export class ExpenseProvider {

  private data: any;

  constructor(
    public http: Http
  ) {

    this.data = {
      expenses: 
      [
        {
          _id: '1',
          name: 'Gasolina',
          type: '1',
          value: 250.00,
          image: 'https://icon-icons.com/icons2/865/PNG/512/Citycons_fuel_icon-icons.com_67929.png'
        },
        {
          _id: '2',
          name: 'Itens de Limpeza',
          type: '2',
          value: 100.00,
          image: 'https://cdn.pixabay.com/photo/2017/03/29/04/09/shopping-icon-2184065_1280.png'
        }
      ]
    };
  }

  load() {
    return new Promise(resolve => {
      /*this.http
        .get(
          `https://api.tvmaze.com/singlesearch/shows?q=the-walking-dead&embed=episodes`
        )
        .map(res => res.json())
        .subscribe(data => {
          resolve(data);
        });*/

        resolve(this.data);
    });
  }

  getExpenseById(_id: string) {
    return new Promise(resolve => {
      /*this.http
        .get(`http://api.tvmaze.com/episodes/${id}`)
        .map(res => res.json())
        .subscribe(data => {
          resolve(data);
        });*/
      let item = null;

      this.data.expenses.forEach(element => {
        if (element._id === _id) {
          item = element;
        }
      });

      resolve(item);
    });
  }
}
