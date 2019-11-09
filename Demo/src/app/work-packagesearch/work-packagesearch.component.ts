import { Component, OnInit,ViewChild } from '@angular/core';
import {Router} from '@angular/router';
import { MatTableDataSource,MatPaginator } from '@angular/material';

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
{no:5,symbol:'+',expandedElement:false,medicationName: 'Temporibusautem', dosage: '50mg', quality: 180, frequency: '60 Days',fillDate:'08/24/2019',desc:'Sample Example To Test5'}
];


@Component({
  selector: 'app-work-packagesearch',
  templateUrl: './work-packagesearch.component.html',
  styleUrls: ['./work-packagesearch.component.css']
})
export class WorkPackagesearchComponent implements OnInit {

  disableMe = false;
  details=false;
   
  @ViewChild(MatPaginator) paginator: MatPaginator;
  //displayedColumns: string[] = ['companyId', 'companyName','update','delete'];
  //dataSource:MatTableDataSource<WorkPackage>;

  displayedColumns: string[] = ['medicationName', 'dosage', 'quality', 'frequency','fillDate'];
  //dataSource = ELEMENT_DATA;
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);


  //displayedColumns: string[] = ['workpackageId', 'vendorName','programNm','workpackageApplicationNm','modifiedFileInd','workpackageStatus'];

  constructor(private router: Router) { }

  ngOnInit() {
    //this._companyService.getCompany().subscribe(data => {this.company = data; this.dataSource= data});
    this.dataSource.paginator = this.paginator;
  }

  defaultValues(){
    this.disableMe=false;
  }

  show (){
    if(this.details)
     this.router.navigate(["/home/custommapping"]); 
   this.details=true;
   
  }

}








