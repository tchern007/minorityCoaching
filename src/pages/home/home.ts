
import { Component, ViewChild } from '@angular/core';
import { NavController, MenuController } from 'ionic-angular';
import { Chart } from 'chart.js';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
    selector: 'home-app',
    templateUrl: 'home.html'
})

export class Home {

    @ViewChild('camembert') camembert;
    doughnutChart: any;

    montantRepartir: string;
    moisARepartir: string;
    dataCamembert: any;
    mesCoachings: any[];
    bgImage:any;

    constructor(public navCtrl: NavController, public menu: MenuController, private sanitizer: DomSanitizer) {
    }

    ngOnInit() {

        this.montantRepartir = '400';
        this.moisARepartir = "Juillet 2017";
        this.dataCamembert = {
            options : {legend:"Ma situation globale :"},
            labels: [
                "Famille",
                "Voiture",
                "Impôts",
                "Loisirs"],
            datasets: [{
                data: [120, 193, 300, 50],
                backgroundColor: [
                    '#f14d4d',
                    '#3373ec',
                    '#dc4acf',
                    '#36e665'],
                hoverBackgroundColor: [
                    "#FF6384",
                    "#36A2EB",
                    "#FFCE56",
                    "#36A2EB"
                ]
            }]
        }

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


      /*  this.mesCoachings = [];
        this.dataCamembert =null;
         this.montantRepartir = null;*/

    }

    ionViewDidLoad() {
        if (this.dataCamembert !=null) {
            this.doughnutChart = new Chart(this.camembert.nativeElement, {

                type: 'doughnut',
                options: {
                    legend: {
                        position: 'left',
                    }
                },
                data: this.dataCamembert
            });
        }

    }


}

