import { Component } from '@angular/core';
import { Pauses } from '../../pages/pauses/pauses' 

@Component({
    templateUrl : 'tabs.html',
    selector : 'tab-app'
})

export class TabsPage {
    
    tab1Root = Pauses;
    tab2Root = Pauses;
    tab3Root = Pauses;
 
 constructor(){
     
 }
    
}