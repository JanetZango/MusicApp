import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { List } from '../../app/array';
import arrlist from '../../app/array';
import { AboutUsPage } from '../about-us/about-us';





@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  arrlist = 0;
  username;
  lastname;


  constructor(public navCtrl: NavController, public navAlert: AlertController) {

  }
  alert() {
    const prompt = this.navAlert.create({
      title: 'Successfully logged!',

      buttons: [
        {
          text: 'Ok',
          handler: data => {
            console.log('log in');
          }
        },
      ]
    });
    prompt.present();
  }

  alert1() {
    const prompt = this.navAlert.create({
      title: 'Cannot have the same Username and password!',

      buttons: [
        {
          text: 'Ok',
          handler: data => {
            console.log('log in');
          }
        },
      ]
    });
    prompt.present();
  }

  add(username, lastname) {
    if (username != lastname && lastname != username) {
      let list = new List(username, lastname)
      arrlist.push(list);
      console.log(arrlist);

      this.alert();
      this.navCtrl.push(AboutUsPage);

    }
    else {
      this.alert1();
    }
  }

}
