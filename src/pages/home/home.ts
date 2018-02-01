import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TranslateService } from '@ngx-translate/core';
import { ExpenseProvider } from '../../providers/expense-service/expense-service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  private obj: any;
  private expenses: any = [];

  constructor(
    private navCtrl: NavController,
    private translate: TranslateService,
    private expenseService: ExpenseProvider
  ) {
    this.getAll();
  }

  getAll() {
    this.expenseService.load()
      .then(data => {
        this.obj = data;
        this.expenses = this.obj.docs;
      });
  }

  getDetail(id:string) {
    this.navCtrl.push("DetailsPage", {
      _id: id
    })
  }

}