import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { HomePage } from '../home/home';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  myForm: FormGroup;
  
  constructor(

    public navCtrl: NavController,
    public fb: FormBuilder,
    public navParams: NavParams,
    public alertCtrl: AlertController
    
  ) {
    this.myForm = this.fb.group({
      //name: ['', [Validators.required]],
      //company: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(10)]],
      email: ['', [Validators.required, Validators.email]],
      //age: ['', [Validators.required]],
      //url: ['', [Validators.pattern(/^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/)]],
      password: ['', [Validators.required, Validators.pattern(/^[a-z0-9_-]{6,18}$/)]],
    });
  }

  saveData(){      
    if(this.myForm.value.email == 'saas02@gmail.com' && this.myForm.value.password == '970015'){      
      this.showAlert('Bienvenido......');
      //this.navCtrl.push(HomePage);
      this.navCtrl.setRoot(HomePage, {}, {animate: true, direction: 'forward'});
    }else{
      this.showAlert('El Usuario o contraseña son incorrectos');
    }
    //alert(JSON.stringify(this.myForm.value));
  }

  showAlert(tittle) {
    const alert = this.alertCtrl.create({
      title: tittle
    });
    alert.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
