import { Component, Input } from '@angular/core';

@Component({
  selector: 'progress-bar',
  templateUrl: 'bar.html'
})
export class ProgressBarComponent {

  @Input('progress') progress;
  classColor: string;

  constructor() {

  }

  ngOnInit() {
    if (this.progress == 100) {
      this.classColor = "full";
    }

    if (this.progress >= 50 && this.progress < 100) {
      this.classColor = "half";
    }

    if (this.progress <= 33 ) {
      this.classColor = "tiers";
    }
  }

}