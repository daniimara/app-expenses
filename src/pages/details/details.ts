import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { PhotoViewer } from '@ionic-native/photo-viewer';
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

  private _id;
  private expense: Expense;

  constructor(
    private navCtrl: NavController,
    private navParams: NavParams,
    private photoViewer: PhotoViewer,
    private expenseService: ExpenseProvider
  ) {
    this._id = navParams.get("_id");
    this.expense = new Expense();

    this.expenseService.getExpenseById(this._id)
    .then(data => {
      this.expense = data;
    });
  }

  openImage(url: string, title: string) {
    this.photoViewer.show(url, title);
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad DetailsPage");
  }
}
