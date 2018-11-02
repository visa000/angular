import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { InsuranceAdvisor } from './insurance-advisor';
import { PolicyDetail } from './policy-detail';

@Injectable({
  providedIn: 'root'
})
export class InsuranceAPIService {

  baseUrl = 'http://localhost:3000';
  lifeInsuranceURL = `${this.baseUrl}/lifeInsurance`;
  header = new HttpHeaders().set('content-type', 'application/json');
  constructor(private http:HttpClient) { }

  findAllAdvisors(): Observable<InsuranceAdvisor[]> {
    //const adviseURL = this.baseUrl + '/advisors';
    const adviseURL = `${this.baseUrl}/advisors`;
    return this.http.get<InsuranceAdvisor[]>(adviseURL);
  }

  findPolicy() : Observable<PolicyDetail[]> {
   
    return this.http.get<PolicyDetail[]>(this.lifeInsuranceURL);
  }

  addPolicy(policy: PolicyDetail) : Observable<PolicyDetail>{
    return this.http.post<PolicyDetail>(this.lifeInsuranceURL, policy, {headers: this.header});
  }

  updatePolicy(policy: PolicyDetail) : Observable<PolicyDetail> {
    const updateUrl = `${this.lifeInsuranceURL}/${policy.id}`;
    return this.http.put<PolicyDetail>(updateUrl, policy, {headers: this.header});
  }

  removePolicy(policy: PolicyDetail) : Observable<PolicyDetail> {
    const deleteUrl = `${this.lifeInsuranceURL}/${policy.id}`;
      return this.http.delete<PolicyDetail>(deleteUrl, {headers: this.header});
  }
}
