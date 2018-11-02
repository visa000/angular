import { Component, OnInit } from '@angular/core';
import { MobileRechargeAPIService } from '../mobile-recharge-api.service';
import { MobilePlan } from '../mobile-plan';

@Component({
  selector: 'app-mobile-recharge-portal',
  templateUrl: './mobile-recharge-portal.component.html',
  styleUrls: ['./mobile-recharge-portal.component.css']
})
export class MobileRechargePortalComponent implements OnInit {

  rechargePlans: MobilePlan[];
  constructor(private service:MobileRechargeAPIService) { }

  ngOnInit() {
    this.service.findAllRechargePlans().subscribe(data => this.rechargePlans = data);
  }

}
