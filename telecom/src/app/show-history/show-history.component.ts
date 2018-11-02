import { Component, OnInit, ViewChild, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { DataGridComponent } from '../data-grid/data-grid.component';
import { TransactionHistoryService } from '../transaction-history.service';

@Component({
  selector: 'app-show-history',
  templateUrl: './show-history.component.html',
  styleUrls: ['./show-history.component.css']
})
export class ShowHistoryComponent implements OnInit, AfterViewInit {
  ngAfterViewInit(): void {
  
  }

  transactionHistory: object[];
  constructor(private ref: ChangeDetectorRef, private service: TransactionHistoryService) { }

  @ViewChild(DataGridComponent) dataGrid: DataGridComponent;
  ngOnInit() {
    this.service.findAllTransactionHistory().subscribe(data => this.transactionHistory = data);
    console.log(this.transactionHistory);
  }
  
}
