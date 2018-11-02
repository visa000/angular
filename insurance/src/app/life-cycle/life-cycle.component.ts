import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-life-cycle',
  templateUrl: './life-cycle.component.html',
  styleUrls: ['./life-cycle.component.css']
})
export class LifeCycleComponent implements OnInit, AfterViewInit {

  user = '';
  constructor() {
    console.log('Inside Constructor');
   }

  ngOnInit() {
    console.log('Inside ngONIT of parent');
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit parent life-cyle');
  }
}
