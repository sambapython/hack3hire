import {Component,OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

export interface PeriodicElement {
  no:number;
  symbol:string;
  expandedElement:boolean;
  medicationName:string;
  dosage:string;
  quality:number;
  frequency:string;
  fillDate:string;
  desc:string;
}

const ELEMENT_DATA: PeriodicElement[] = [
{no:0,symbol:'+',expandedElement:false,medicationName: 'Exercitation Ullamco', dosage: '50mg', quality: 120, frequency: '30 Days',fillDate:'08/13/2019',desc:'Sample Example To Test'},
{no:1,symbol:'+',expandedElement:false,medicationName: 'Magni Dolores', dosage: '400mg', quality: 60, frequency: '30 Days',fillDate:'07/24/2019',desc:'Sample Example To Test 1'},
{no:2,symbol:'+',expandedElement:false,medicationName: 'temporibusautem', dosage: '30 - 60mg', quality: 200, frequency: '90 Days',fillDate:'05/24/2019',desc:'Sample Example To Test2'},
{no:3,symbol:'+',expandedElement:false,medicationName: 'exercitation Ullamco', dosage: '(2)10mg', quality: 150, frequency: '60 Days',fillDate:'05/24/2019',desc:'Sample Example To Test3'},
{no:4,symbol:'+',expandedElement:false,medicationName: 'Magni Dolores', dosage: '40mg', quality: 120, frequency: '20 Days',fillDate:'08/24/2019',desc:'Sample Example To Test4'},
{no:5,symbol:'+',expandedElement:false,medicationName: 'Temporibusautem', dosage: '50mg', quality: 180, frequency: '60 Days',fillDate:'08/24/2019',desc:'Sample Example To Test5'}
];


/**
 * @title Basic use of `<table mat-table>`
 */
@Component({
  selector: 'app-custommapping',
  templateUrl: './custommapping.component.html',
  styleUrls: ['./custommapping.component.css']
})


export class CustommappingComponent implements OnInit {
  masterscreen=false;
  expandAll="Expand All";
  symbol="+";
  displayedColumns: string[] = ['medicationName', 'dosage', 'quality', 'frequency','fillDate'];
  //dataSource = ELEMENT_DATA;
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }
  funexpandAll (){

    if(this.expandAll == "Expand All"){
      this.expandAll="Collaspe All";
      for(let i=0;i<this.dataSource.data.length;i++){
        this.dataSource.data[i].expandedElement=true;
        this.dataSource.data[i].symbol="-";
      }
    }
    else{
      this.expandAll="Expand All";
      for(let i=0;i<this.dataSource.data.length;i++){
        this.dataSource.data[i].expandedElement=false;
        this.dataSource.data[i].symbol="+";
      }
    }

  }

  medexpand(rownum) {
    if(this.dataSource.data[rownum].expandedElement){
      this.dataSource.data[rownum].expandedElement=false;
      this.dataSource.data[rownum].symbol="+";
    }
    else{ 
       this.dataSource.data[rownum].expandedElement=true; 
       this.dataSource.data[rownum].symbol="-";
    } 
    
  }
}

