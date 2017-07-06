import { Component,ViewChild } from '@angular/core';
import { NavController, MenuController } from 'ionic-angular';
import { App, ViewController } from 'ionic-angular';

@Component({
    selector: 'coaching-app',
    templateUrl: 'projection.html'
})

export class Projection{

    mesCoachings: any[];
    

    constructor(public navCtrl: NavController, public menu: MenuController,public appCtrl: App) {
    }

    ngOnInit() {
        this.mesCoachings = [
            { img: "vacances.jpg",date: "01/09/2017", titre: "Voyage au Pérou", 
            evenement: "100" , icone: "football", sourceimg : "google.png", color : "#111111"},  

            { img: "maison.jpg",date: "10/09/2017", titre: "Anniversaire de Matéo", 
            evenement: "500", icone: "home", sourceimg : "facebook.png" , color : "#111111"} ,    

            { img: "voiture.png",date: "09/09/2017", titre: "Contrôle technique", 
            evenement: "50", icone: "contacts", sourceimg : "google.png" , color : "#111111"}

               
        ]
    }


}