import { Http } from "@angular/http";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import "rxjs/add/operator/map";

import { Expense, Type } from "../../models/expense";

@Injectable()
export class ExpenseProvider {

  private expenses: any;
  private types: any;

  constructor(
    public http: Http
  ) {

    this.types = {
      docs:
      [
        {
          _id: '1',
          name: 'Combustível',
          icon: 'https://icon-icons.com/icons2/865/PNG/512/Citycons_fuel_icon-icons.com_67929.png'
        },
        {
          _id: '2',
          name: 'Mercado',
          icon: 'https://cdn.pixabay.com/photo/2015/12/23/01/14/edit-1105049_1280.png'
        },
        {
          _id: '3',
          name: 'Escola'
        },
        {
          _id: '4',
          name: 'Academia'
        }
      ]
    };

    this.expenses = {
      docs:
      [
        {
          _id: '1',
          name: 'Gasolina',
          type: '1',
          value: 250.00,
          image: 'http://4.bp.blogspot.com/-Q5slMZkRdlM/UfkQGqJOEhI/AAAAAAAADD0/psTdXofY8YE/s1600/$RNRWO4S.jpg'
        },
        {
          _id: '2',
          name: 'Álcool',
          type: '1',
          value: 300.00,
          image: 'http://4.bp.blogspot.com/-Q5slMZkRdlM/UfkQGqJOEhI/AAAAAAAADD0/psTdXofY8YE/s1600/$RNRWO4S.jpg'
        },
        {
          _id: '3',
          name: 'Gas',
          type: '1',
          value: 150.00,
          image: 'http://4.bp.blogspot.com/-Q5slMZkRdlM/UfkQGqJOEhI/AAAAAAAADD0/psTdXofY8YE/s1600/$RNRWO4S.jpg'
        },
        {
          _id: '3',
          name: 'Itens de Limpeza',
          type: '2',
          value: 100.00,
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

        resolve(this.types);
    });
  }

  getExpenseByTypeId(_id: string) {
    return new Promise(resolve => {
      /*this.http
        .get(`http://api.tvmaze.com/episodes/${id}`)
        .map(res => res.json())
        .subscribe(data => {
          resolve(data);
        });*/
      let list = [];

      this.expenses.docs.forEach(element => {
        if (element.type === _id) {
          list.push(element);
        }
      });

      resolve(<Expense[]>list);
    });
  }

  getTypes() {
    return new Promise(resolve => {
      resolve(this.types);
    });
  }

  getTypeById(_id: string) {
    return new Promise(resolve => {
      let item = null;

      this.types.docs.forEach(element => {
        if (element._id === _id) {
          item = element;
        }
      });

      resolve(item);
    });
  }
}
