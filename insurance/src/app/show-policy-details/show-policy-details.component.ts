import { Component, OnInit, ViewChild } from '@angular/core';
import { InsuranceAPIService } from '../insurance-api.service';
import { PolicyDetail } from '../policy-detail';

@Component({
  selector: 'app-show-policy-details',
  templateUrl: './show-policy-details.component.html',
  styleUrls: ['./show-policy-details.component.css']
})
export class ShowPolicyDetailsComponent implements OnInit {

  indxPos = 0;
  searchName = '';
  sign = '^';
  toggleForm = false;
  action = 'Expand';
  page = 0;
  policyData : PolicyDetail = {
    id:0,
    policyHolderName:'',
    policyAmount:0,
    maturityDate:new Date()
  };

  buttonText = 'Add';
  
  policyDetailList: PolicyDetail[];

  @ViewChild('f') form:any;
  constructor(private service: InsuranceAPIService) { 
    
  }

  ngOnInit() {
    this.service.findPolicy().subscribe(data => this.policyDetailList = data);
  }
  submit() {
    if (this.buttonText === 'Add') {
    this.service.addPolicy(this.policyData).subscribe(resp => {
      this.policyDetailList.push(resp);
      console.log(this.form);
      this.form.reset();
    });
  } else {
    this.service.updatePolicy(this.policyData).subscribe(resp => {
      this.policyDetailList[this.indxPos] = resp;
      this.buttonText= 'Add';
      this.form.reset();
      });
  }
    console.log(this.policyData);
  }

  update(policy:PolicyDetail) {
    this.indxPos = this.policyDetailList.indexOf(policy);
    this.buttonText = 'Update';
    this.policyData = policy;
   
    this.toggleForm = true;
    this.status = false;
    this.action = 'Close'; 
   

    console.log('update called');
  }
  
  remove(policy:PolicyDetail) {
    const indexPos = this.policyDetailList.indexOf(policy);
    this.service.removePolicy(policy).subscribe(resp => {
    this.policyDetailList.splice(indexPos, 1);
    });
    console.log('remove called');
  }

  showForm() {
    console.log(this.toggleForm);
    this.toggleForm = !this.toggleForm;
    this.status = !this.status; 
    if (this.status == true) {
      this.sign = '^';
      this.action = 'Expand' } else {
      this.sign = 'v';
      this.action = 'Close';
      }
  }

  status: boolean = true;
  
}
