import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { UserServiceProvider } from '../../providers/user-service/user-service';
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
  users: any[] = [];

  myForm: FormGroup;
  
  constructor(

    public navCtrl: NavController,
    public fb: FormBuilder,
    public navParams: NavParams,
    public alertCtrl: AlertController,
    public userService: UserServiceProvider
    
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

  loginData(){
    this.userService.getUsers(this.myForm.value.email, this.myForm.value.password)
    .subscribe(
      (data) => { // Success                
        var info = JSON.parse('{"code":"00","response":[{"id_tipo_activo":"3","nombre":"Cami\u00f3n","id_activo":"1","nombre_activo":"12 - camion freightliner","Kilometraje":"130010.00"}]}');
        //var info = JSON.parse('{"code":"99","response":"Debe enviar el id_empresa para realizar la consulta"}');
        if(info['code'] != 0){
          return this.showAlert(info['response']);
        }         
        this.users = info['response'];
        this.showAlert('Bienvenido......'+info['response'][0].nombre);
        this.navCtrl.setRoot(HomePage, {data: info['response'][0]}, {animate: true, direction: 'forward'});             
      },
      (error) =>{        
        console.error(error);
      }
    )
  }

  saveData(){      
    if(this.myForm.value.email == 'saas02@gmail.com' && this.myForm.value.password == '970015'){      
      this.showAlert('Bienvenido......');
      //this.navCtrl.push(HomePage);
      this.navCtrl.setRoot(HomePage, {myData:"test data"}, {animate: true, direction: 'forward'});
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
