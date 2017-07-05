import { Component } from '@angular/core';;
import { NavParams} from 'ionic-angular';
import { TableauPauses } from './tab';


@Component({
    templateUrl: 'pauses.html'
})


export class Pauses {


    tabs : Array<{  param : any, title : string , root : any }>    

    
   constructor(public params: NavParams) {    
    
    this.tabs = [{param : { param : "Epargne" } , title : "Epargne" , root: TableauPauses },
                 {param : { param : "Prevoyance" } , title : "Prevoyance" , root: TableauPauses },
                 {param : { param : "Ade" } , title : "Ade" , root : TableauPauses },
                 {param : { param : "Administratif" } , title : "Administratif" , root: TableauPauses }                 
    ];
  }       
}
