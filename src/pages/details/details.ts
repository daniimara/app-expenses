import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { ExpenseProvider } from "../../providers/expense-service/expense-service";
import { Expense } from "../../models/expense";

/**
 * Generated class for the DetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-details",
  templateUrl: "details.html"
})
export class DetailsPage {
  public _id;
  public expense: Expense;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public expenseService: ExpenseProvider
  ) {
    this._id = navParams.get("_id");
    this.expense = new Expense();

    this.expenseService.getExpenseById(this._id)
    .then(data => {
      this.expense = data;
    });
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad DetailsPage");
  }
}
