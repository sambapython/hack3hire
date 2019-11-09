  import {Component,OnInit, ViewChild} from '@angular/core';
  import {MatPaginator} from '@angular/material/paginator';
  import {MatTableDataSource} from '@angular/material/table';
  import {StockDetails} from '../stockDetails';
  
  export interface PeriodicElement {
    qty:number;
    stockname:string;
    price:number;
    ltp:number;
    }
  
  const ELEMENT_DATA: StockDetails[] = [
  {qty:100,stockname:'SBN',price:200, ltp: 2000},
  {qty:100,stockname:'TCS',price:100, ltp: 1000}];
  
  
  /**
   * @title Basic use of `<table mat-table>`
   */
  @Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
  })
  
  export class LoginComponent implements OnInit {
    disableMe:boolean;
    displayedColumns: string[] = ['stockname', 'qty', 'price', 'ltp',];
    //dataSource = ELEMENT_DATA;
    dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  
    @ViewChild(MatPaginator) paginator: MatPaginator;
  
    ngOnInit() {
      this.disableMe=false;
    }

    getStock() : void {
      alert("Test...");
      this.disableMe=true;
    }
    
    
  }
  
  