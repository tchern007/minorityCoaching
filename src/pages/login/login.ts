import { Component, ViewChild  } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Home } from '../home/home';
import { SessionService } from '../../services/session/session.service';
import { User } from '../../models/user';
import { MenuController } from 'ionic-angular';


@Component({
    selector: 'login',
    templateUrl: 'login.html',
    providers : [SessionService]    
})
export class Login {  
    
    userSession : User;
    login : string;
    motDePasse : string;
    // rootPage : any;

    constructor(public menuCtrl : MenuController ,public navCtrl : NavController, private _sessionService : SessionService) {
        
        //Desactive le menu sur la page ce login
         this.menuCtrl.enable(false);
    }

    ngOnInit() {
        this.userSession = this._sessionService.getSession();
        console.log(this.userSession);

    }

    connexion(){
        console.log(this.login)
        console.log(this.motDePasse) 
        this.userSession = new User();
        this.userSession.nom = 'Pasquier';
        this.userSession.prenom = 'Quentin';
        this.userSession.login = this.login;
        this.userSession.role = ['ADMINISTRATEUR','DEMANDEUR','DEMANDEUR'];
        
        this._sessionService.setSession(this.userSession);
        this.menuCtrl.enable(true);
        this.navCtrl.setRoot(Home);
        
    }

}