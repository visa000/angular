import { Component, OnInit, Input, EventEmitter, Output, ViewChild, ViewContainerRef } from '@angular/core';
import { ComponentAdderService } from '../component-adder.service';

@Component({
  selector: 'app-show-branch',
  templateUrl: './show-branch.component.html',
  styleUrls: ['./show-branch.component.css']
})
export class ShowBranchComponent implements OnInit {

  @Input() cityName:string;
  @Output() branches:EventEmitter<String[]> = new EventEmitter<String[]>();

  

  constructor() { }

  ngOnInit() {
  }

  sendBranches() {
    if (this.cityName == 'hyd') {
     this.branches.emit(['madhapur', 'hi-tech city', 'miyapur']);
    } else {
     this.branches.emit(['auto nagar', 'patel nagar', 'gandhi nagar']);
    }
  }
  
}
