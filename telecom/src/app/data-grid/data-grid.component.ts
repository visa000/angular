import { Component, OnInit } from '@angular/core';
import { TransactionHistoryService } from '../transaction-history.service';

@Component({
  selector: 'app-data-grid',
  templateUrl: './data-grid.component.html',
  styleUrls: ['./data-grid.component.css']
})
export class DataGridComponent implements OnInit {

  constructor(private service: TransactionHistoryService) { }

  transactionData : Object[];
  ngOnInit() {
       
  }
  
}
