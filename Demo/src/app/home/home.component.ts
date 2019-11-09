import { Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  isMenuOpen = true;
  contentMargin = 240;  
  panelOpenState = false;
  masterscreen=false;
  reportscreen=false;
  index=0;
 
  
  constructor(private router: Router,private modalService: NgbModal) { }

  ngOnInit() {
    
  }

  task: string[] = [
    'Clearning out my closet', 'Take out trash bins', 'Wash car', 'Tank up the motorcycles', 'Go for flight training'
  ]

  onToolbarMenuToggle() {
    console.log('On toolbar toggled', this.isMenuOpen);
    this.isMenuOpen = !this.isMenuOpen;

    if(!this.isMenuOpen) {
      this.contentMargin = 70;
    } else {
      this.contentMargin = 240;
    }
  }

  logout() {
    this.router.navigate(["login"]); 
  }

  toggleMenu() {
    this.masterscreen = !this.masterscreen; 
  }

  search (){
    this.router.navigate(["/home/workPackageSearch"]); 
  }

  reportMenu(){
    this.reportscreen = !this.reportscreen;
  }
  
  workpackageSearch() {
    this.index=1;
    //this.router.navigate(["/home/depatments"]); 
    this.router.navigate(["/home/workPackageSearch"]);    
  }

  custommapping() {
    this.index=3;
    this.router.navigate(["/home/custommapping"]); 
  }

  homepage(){
    this.router.navigate(["/home/homepage"]); 
  }

 

  
  
}
