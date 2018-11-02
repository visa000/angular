import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { ComponentAdderService } from '../component-adder.service';
import { ShowLocationComponent } from '../show-location/show-location.component';

@Component({
  selector: 'app-search-branch',
  templateUrl: './search-branch.component.html',
  styleUrls: ['./search-branch.component.css']
})
export class SearchBranchComponent implements OnInit {

  searchCity = '';
  branchList: string[];
  showLocationComponent: ShowLocationComponent;
  comp: any;
  @ViewChild('locationInfo',{read: ViewContainerRef}) viewRef: ViewContainerRef;
  constructor(private service: ComponentAdderService) { }
  ngOnInit() {
  }

  onChange(val) {
    this.branchList = val;
  }

  add() { 
      this.service.setViewRef(this.viewRef);
      this.comp  =  this.service.addComponent(ShowLocationComponent);
      this.showLocationComponent = (<ShowLocationComponent>this.comp.instance);
      this.showLocationComponent.selectedLocation.subscribe(value => {
      this.searchCity = value;
      if (value.length > 0) {
        this.remove();
      }
    });
  }

  remove() {
    this.viewRef.detach();
  }
}
