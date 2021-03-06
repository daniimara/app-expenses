import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { PhotoViewer } from '@ionic-native/photo-viewer';
import { TranslateService } from '@ngx-translate/core';

import { ExpenseProvider } from "../../providers/expense-service/expense-service";
import { Expense, Type } from "../../models/expense";
import { FormatterNumber } from '../../utils/formatter';

@IonicPage()
@Component({
  selector: "page-details",
  templateUrl: "details.html"
})

export class DetailsPage {

  private expenses: Expense[] = [];
  private type: Type;

  private descending: boolean = false;
  private order: number;
  private column: string = 'name';

  constructor(
    private navCtrl: NavController,
    private navParams: NavParams,
    private photoViewer: PhotoViewer,
    private translate: TranslateService,
    private formatterNumber: FormatterNumber,
    private expenseService: ExpenseProvider
  ) {

    this.type = new Type();
    this.type._id = navParams.get("_id");

    this.expenseService.getTypeById(this.type._id)
    .then(data => {
      this.type = data;
      return this.expenseService.getExpenseByTypeId(this.type._id);
      }).then(data => {
        this.expenses = <Expense[]>data;
    });
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad DetailsPage");
  }

  openImage(url: string, title: string) {
    this.photoViewer.show(url, title);
  }

  sort(){
    this.descending = !this.descending;
    this.order = this.descending ? 1 : -1;
  }

}