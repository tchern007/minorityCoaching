import { Component,ViewChild } from '@angular/core';
import { NavController, MenuController } from 'ionic-angular';
import { App, ViewController } from 'ionic-angular';
import { DetailCoaching } from '../detail-coaching/detail-coaching'
import { Evenement } from '../evenement/evenement'


@Component({
    selector: 'coaching-app',
    templateUrl: 'coaching.html',

})

export class Coaching {

    mesCoachings: any[];
    

    constructor(public navCtrl: NavController, public menu: MenuController,public appCtrl: App) {
    }

    ngOnInit() {
        this.mesCoachings = [
            { img: "vacances.jpg",date: "01/09/2017", titre: "Vacances", evenement: "100" },       
            { img: "proches.jpg",date: "09/09/2017", titre: "Mes proches", evenement: "50" },
            { img: "maison.jpg",date: "10/09/2017", titre: "Maison", evenement: "500" }                    
        ]
    }

     openPage(page) {   
    this.menu.close();
    console.log(page);

    this.appCtrl.getRootNav().setRoot(DetailCoaching,{
        coaching : page
    });
    //this.nav.setRoot(page.component);
  }

  evenement(){
      this.appCtrl.getRootNav().setRoot(Evenement);
  }


}