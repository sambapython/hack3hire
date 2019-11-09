import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import {CustommappingComponent} from './custommapping/custommapping.component';
import {WorkPackagesearchComponent} from './work-packagesearch/work-packagesearch.component'

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'home',component:HomeComponent,
   children: [{path:'workPackageSearch', component:WorkPackagesearchComponent},
   {path:'custommapping',component:CustommappingComponent}   
  ]}  
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[
  LoginComponent,HomeComponent,WorkPackagesearchComponent,
  CustommappingComponent]
