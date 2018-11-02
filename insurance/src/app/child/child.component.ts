import { Component, OnInit, Input, OnChanges, SimpleChange, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit, OnChanges {

  @Input() name:string;

  constructor() {
    console.log('child constructor called');
    console.log('input property in constructor ' + this.name);
   }

  ngOnInit() {
    console.log('child on init called');
    console.log('input property ' + this.name);
  }

  ngOnChanges(change: SimpleChanges) {
    console.log(change.name.previousValue);
    console.log(change.name.currentValue);
  }

}
