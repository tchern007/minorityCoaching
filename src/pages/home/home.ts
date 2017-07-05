
import { Component, ViewChild } from '@angular/core';
import { NavController, MenuController } from 'ionic-angular';
import { Chart } from 'chart.js';

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

    constructor(public navCtrl: NavController, public menu: MenuController) {
    }

    ngOnInit() {

        this.montantRepartir = '400';
        this.moisARepartir = "Juillet 2017";
        this.dataCamembert = {
            labels: [
                "Famille",
                "Voiture",
                "Impôts",
                "Loisir"],
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
            { icon: "home", title: "Impôts", date: "01/09/2017", montant: "1900" },
            { icon: "logo-reddit", title: "Anniversaire", date: "03/09/2017", montant: "100" },
            { icon: "car", title: "Voiture", date: "09/09/2017", montant: "600" },
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

