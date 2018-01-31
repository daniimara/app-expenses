import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ExpenseProvider } from '../../providers/expense-service/expense-service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public obj: any;
  public result: any;

  descending: boolean = false;
  order: number;
  column: string = 'name';

  constructor(
    public navCtrl: NavController,
    public expenseService: ExpenseProvider
  ) {
    this.getAll();
  }

  getAll() {
    this.expenseService.load()
      .then(data => {
        this.obj = data;
        this.result = this.obj.expenses;
      });
  }

  getDetail(id:string) {
    this.navCtrl.push("DetailsPage", {
      _id: id
    })
  }

  sort(){
    this.descending = !this.descending;
    this.order = this.descending ? 1 : -1;
  }

}
