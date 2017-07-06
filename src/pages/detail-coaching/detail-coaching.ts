import {Component,ViewChild,Input} from '@angular/core';
import { NavController, MenuController,NavParams } from 'ionic-angular';
import { ProgressBarComponent} from '../bar/bar';

@Component({
    selector: 'detail-coaching-app',
    templateUrl: 'detail-coaching.html',

})


export class DetailCoaching {

monCoaching : any;
evenements : any[];
 constructor(public navCtrl: NavController, public menu: MenuController,public navParams : NavParams) {
     this.monCoaching = this.navParams.get('coaching');
     console.log(this.monCoaching.evenements);
     this.evenements = this.monCoaching.evenements;
}

ngOnInit() {
    console.log(this.monCoaching);
}



}