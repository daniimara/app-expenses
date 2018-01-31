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
          icon: 'https://icon-icons.com/icons2/865/PNG/512/Citycons_fuel_icon-icons.com_67929.png',
          image: 'http://4.bp.blogspot.com/-Q5slMZkRdlM/UfkQGqJOEhI/AAAAAAAADD0/psTdXofY8YE/s1600/$RNRWO4S.jpg'
        },
        {
          _id: '2',
          name: 'Itens de Limpeza',
          type: '2',
          value: 100.00,
          icon: 'https://cdn.pixabay.com/photo/2015/12/23/01/14/edit-1105049_1280.png',
          image: 'http://1.bp.blogspot.com/-7MwcmqUzJ88/UYZsF5DnN0I/AAAAAAAAXWs/OSn90AwKe_o/s1600/Cupom+Fiscal.jpg'
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
