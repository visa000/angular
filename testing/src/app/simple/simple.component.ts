import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-simple',
  templateUrl: './simple.component.html',
  styleUrls: ['./simple.component.css']
})
export class SimpleComponent implements OnInit {

  message = 'Testing Example';
  constructor() { }

  ngOnInit() {
  }

  changeMessage() {
    this.message = 'Understood testing';
  }
}
