import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { LoginPage } from '../login/login';

/**
 * Generated class for the CerrarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cerrar',
  templateUrl: 'cerrar.html',
})
export class CerrarPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    this.showAlert('Cerrando Sesión');
    this.navCtrl.push(LoginPage);    
  }  

  showAlert(tittle) {
    const alert = this.alertCtrl.create({
      title: tittle
    });
    alert.present();
  }

}
