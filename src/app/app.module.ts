import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';

import { MyApp } from './app.component';

import { Login } from '../pages/login/login';
import { Home } from '../pages/home/home';
import { Pauses } from '../pages/pauses/pauses'; 
import { TableauPauses } from '../pages/pauses/tab';
import { TimeLine } from '../pages/timeline/timeline';
import { Coaching } from '../pages/coaching/coaching';
import { DetailCoaching } from '../pages/detail-coaching/detail-coaching'
import { Projection } from '../pages/projection/projection'
import { Evenement } from '../pages/evenement/evenement'




import {SessionService} from '../services/session/session.service';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    Login,       
    Home,
    Pauses,   
    TimeLine,
    TableauPauses,
    Coaching,
    DetailCoaching,
    Projection,    
    Evenement
  ],
  imports: [
    FormsModule,
    BrowserModule,    
    IonicModule.forRoot(MyApp),
  ],
bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Login,  
    Home,
    Pauses,      
    TableauPauses,
    TimeLine,
    Coaching,
    DetailCoaching,
    Projection,
    Evenement
    
  ],
  providers: [
    SessionService,  
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}