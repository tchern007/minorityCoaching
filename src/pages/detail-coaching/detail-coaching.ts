import {Component,ViewChild,Input} from '@angular/core';
import { NavController, MenuController,NavParams } from 'ionic-angular';

@Component({
    selector: 'detail-coaching-app',
    templateUrl: 'detail-coaching.html',

})


export class DetailCoaching {

monCoaching : any;
 constructor(public navCtrl: NavController, public menu: MenuController,public navParams : NavParams) {
     this.monCoaching = this.navParams.get('coaching');
}

ngOnInit() {
    console.log(this.monCoaching);
}



}