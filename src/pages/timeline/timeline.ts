import { Component } from '@angular/core';;
import { NavParams} from 'ionic-angular';
import { TableauPauses } from './tab';


@Component({
    selector : 'timeline-app',
    templateUrl: 'timeline.html'
})


export class TimeLine {

    
   constructor(public params: NavParams) {    }
    
   
  }       