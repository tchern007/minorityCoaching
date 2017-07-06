import { Component, ViewChild } from '@angular/core';
import { NavController, MenuController } from 'ionic-angular';
import { App, ViewController } from 'ionic-angular';
import { DetailCoaching } from '../detail-coaching/detail-coaching'
import { Evenement } from '../evenement/evenement'
import { HttpService } from '../../services/http/http.service'
import { Http} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Component({
    selector: 'coaching-app',
    templateUrl: 'coaching.html',
    providers: [HttpService]

})

export class Coaching {

    mesCoachings: any[];


    constructor(public navCtrl: NavController, public menu: MenuController, public appCtrl: App,public _http : Http) {
    }

    ngOnInit() {
        /*this._http.get()*/
        this.mesCoachings = [
            {                
                img: "vacances.jpg", date: "01/09/2017", titre: "Vacances", evenement: "100",
                evenements: [
                            { img: "vacances.jpg", titre : "Week-end à Paris", sommeCourante: "100", sommeCible : "300" , date : "08/09/2017" ,class :"futur", pourcentage : 33},
                            { img: "vacances.jpg", titre : "Vacances d'été à Vezoul", sommeCourante: "800", sommeCible : "1000", date : "13/09/2017" ,class :"futur", pourcentage : 80},
                            { img: "vacances.jpg", titre : "Vacances à la Plagne", sommeCourante: "1500", sommeCible : "1500",date : "23/02/2017",class :"passe", pourcentage : 100},
                            { img: "vacances.jpg", titre : "Journée Disney", sommeCourante: "300", sommeCible : "300", date : "10/12/2016",class :"passe", pourcentage : 100},
                            { img: "vacances.jpg", titre : "Week-end à Madrid", sommeCourante: "350", sommeCible : "350", date : "08/10/2016",class :"passe", pourcentage : 100}]
            },
            { img: "proches.jpg", date: "09/09/2017", titre: "Mes proches", evenement: "50",
                evenements: [
                            { img: "proches.jpg", titre : "Anniversaire Papa", sommeCourante: "50", sommeCible : "100" , date : "08/09/2017" ,class :"futur", pourcentage : 50},
                            { img: "proches.jpg", titre : "Anniversaire Maman", sommeCourante: "30", sommeCible : "100", date : "12/10/2017" ,class :"futur", pourcentage : 33},
                            { img: "proches.jpg", titre : "Anniversaire Julien", sommeCourante: "150", sommeCible : "150",date : "10/05/2017",class :"passe", pourcentage : 100},
                            { img: "proches.jpg", titre : "Anniversaire David", sommeCourante: "50", sommeCible : "50", date : "09/03/2017",class :"passe", pourcentage : 100},
                            { img: "proches.jpg", titre : "Anniversaire Julie", sommeCourante: "20", sommeCible : "30", date : "08/10/2016",class :"passe", pourcentage : 100}] },
            { img: "maison.jpg", date: "10/09/2017", titre: "Maison", evenement: "500" }
        ]
    }

    openPage(page) {
        this.menu.close();
        console.log(page);

        this.appCtrl.getRootNav().setRoot(DetailCoaching, {
            coaching: page
        });
        //this.nav.setRoot(page.component);
    }

    evenement() {
        this.appCtrl.getRootNav().setRoot(Evenement);
    }


}