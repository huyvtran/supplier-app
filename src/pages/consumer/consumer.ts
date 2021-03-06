import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ConsumerPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-consumer',
  templateUrl: 'consumer.html',
})
export class ConsumerPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  requirement:any = this.navParams.get('params');
  ionViewDidLoad() {
    console.log('ionViewDidLoad ConsumerPage');
  }

}
