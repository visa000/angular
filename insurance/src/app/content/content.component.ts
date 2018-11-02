import { Component, OnInit, AfterViewInit, ViewChild, ChangeDetectionStrategy, ChangeDetectorRef, ViewChildren, QueryList } from '@angular/core';
import { PolicyDetails } from '../policy-details';
import { TestimonyComponent } from '../testimony/testimony.component';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit, AfterViewInit {
  
  feedback1: string;
  feedback2: string;
  
  
  ngAfterViewInit(): void {
    this.feedback1 = this.compRef.getcorpCustomerFeedBack();
    this.feedback2 = this.compRef.getRetailCustomerFeedBack();
    this.ref.detectChanges();

    console.log(this.sectionList);
  }

  @ViewChildren('section') sectionList:QueryList<any>;
  @ViewChild(TestimonyComponent) compRef: TestimonyComponent;
  
  policyDetails:PolicyDetails[] = [
    {policyName: 'Jeevan Anand', policyDescription: 'Policy designed for Elders'},
    {policyName: 'Jeevan Akshaya', policyDescription: 'Policy designed for Children'}
  ]

  constructor(private ref: ChangeDetectorRef) {
    
   }

  ngOnInit() {
  }

}