import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransactionHistoryService {

  baseUrl= 'http://localhost:3000';
  constructor(private http: HttpClient) { }

  findAllTransactionHistory() : Observable<object[]> {
    const url= `${this.baseUrl}/transactionhistory`;
    console.log(url);
    return this.http.get<object[]>(url);
  }
}
