import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MobilePlan } from './mobile-plan';

@Injectable({
  providedIn: 'root'
})
export class MobileRechargeAPIService {

  baseUrl = 'http://localhost:3000';
  constructor(private http:HttpClient) { }
  
  findAllRechargePlans(): Observable<MobilePlan[]> {
    const url = `${this.baseUrl}/mobileplans`;
    return this.http.get<MobilePlan[]>(url);
  }
}
