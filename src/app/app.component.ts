import { Component, ViewChild } from '@angular/core';
import { Platform , MenuController , NavController  } from 'ionic-angular';
import { SessionService } from '../services/session/session.service';
import { Login } from '../pages/login/login';
import { Home } from '../pages/home/home';
import { Pauses } from '../pages/pauses/pauses'
import { TimeLine } from '../pages/timeline/timeline';
import { Coaching } from '../pages/coaching/coaching';





/*import { ListPage } from '../pages/list/list';*/

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


@Component({
  templateUrl: 'app.html',
  providers : [SessionService]
})
export class MyApp {
    
 @ViewChild('content') nav: NavController
 
  rootPage:any ;
  pages: Array<{ icon : string , title: string, component: any }>;


 ngOnInit() {
     
  /*   this.userSession.nom = 'Pasquier';
     this.userSession.prenom = 'Quentin';
     this.userSession.login = this.login;
     this.userSession.role = ['ADMINISTRATEUR','DEMANDEUR','VALIDEUR'];   */       
     if(this._sessionService.getSession() == null){    
         this.rootPage = Login;
     }
     else {   
         this.rootPage = Home;
     }
 }


  constructor(
    public platform: Platform,
    public menu: MenuController,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    private _sessionService : SessionService
  ) {      
    this.initializeApp();  

    this.pages = [
      { icon : "home" , title : "Accueil" , component: Pauses },
      { icon : "logo-euro" , title : "Mes Plan'it" , component: Coaching },
      { icon : "trophy" , title : "Challenges" , component: Pauses },
      { icon : "trending-up" , title : "Projections" , component: Pauses }     
    ];
  }
 
  initializeApp() {
      this.splashScreen.show();
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
    /*  this.statusBar.overlaysWebView(true);*/
      this.statusBar.backgroundColorByHexString('#434A54');
      this.splashScreen.hide();
    })};  

  openPage(page) {   
    this.menu.close();
    this.nav.setRoot(page.component);
  }
}