import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileRechargePortalComponent } from './mobile-recharge-portal.component';

describe('MobileRechargePortalComponent', () => {
  let component: MobileRechargePortalComponent;
  let fixture: ComponentFixture<MobileRechargePortalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobileRechargePortalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileRechargePortalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
