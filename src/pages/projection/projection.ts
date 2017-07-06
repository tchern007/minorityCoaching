import { Component,ViewChild } from '@angular/core';
import { NavController, MenuController } from 'ionic-angular';
import { App, ViewController } from 'ionic-angular';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
    selector: 'coaching-app',
    templateUrl: 'projection.html'
})

export class Projection{

    mesCoachings: any[];
    bgImage:any;

    constructor(public navCtrl: NavController, public menu: MenuController,public appCtrl: App,private sanitizer: DomSanitizer) {
    }

    ngOnInit() {
        this.mesCoachings = [
            { img: "vacances.jpg",date: "01/09/2017", titre: "Voyage au Pérou", 
            evenement: "100" , icone: "football", sourceimg : "google.png",bgImage : this.sanitizer.bypassSecurityTrustStyle('url(../../assets/img/vacances.jpg')
            , theme:"themeLoisir", nameTheme : "Mes loisirs"
            },  

            { img: "evt_anniversaire.png",date: "10/09/2017", titre: "Anniversaire de Matéo", 
            evenement: "500", icone: "home", sourceimg : "facebook.png" , bgImage : this.sanitizer.bypassSecurityTrustStyle('url(../../assets/img/evt_anniversaire.png')
            , theme:"themeFamille", nameTheme : "Ma famille"    
            } ,    

            { img: "evt_voiture.png",date: "09/09/2017", titre: "Contrôle technique", 
            evenement: "50", icone: "contacts", sourceimg : "google.png" , bgImage : this.sanitizer.bypassSecurityTrustStyle('url(../../assets/img/evt_voiture.png')
            , theme:"themeVoiture", nameTheme : "Ma voiture"
            }

               
        ]
    }


}