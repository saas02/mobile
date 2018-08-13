import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  userProfile: any;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams
  ) {
    this.userProfile = this.navParams.get("data");
    console.log("tabspage param", this.userProfile);
  }

}
