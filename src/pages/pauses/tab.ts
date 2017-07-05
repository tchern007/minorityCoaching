import { Component } from '@angular/core';
import { NavParams} from 'ionic-angular';


@Component({
  templateUrl : "tab.html"

})

export class TableauPauses {    
    
    title : string;
    content : string;
    
  constructor(navParams: NavParams) {
      console.log("Passed params", navParams.data);  
      this.title= navParams.data.param;
      this.content = navParams.data.param;        
    } 
}

