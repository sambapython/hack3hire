import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { StockDetails} from './stockDetails';
import { Observable } from 'rxjs';
import { District} from './district-info';

@Injectable({
  providedIn: 'root'
})
export class StockInfo {
  public sharedCompany:StockDetails;

  constructor(private http:HttpClient) { }
  baseUrl:string="http://localhost:8080/pvrpoc/company/";
  basedestUrl:string="http://localhost:8080/pvrpoc/district/";

  getCompany(): Observable<StockDetails[]>
  {
    return this.http.get<StockDetails[]>(this.baseUrl+"companyDetails");
  }

  getDistrict(): Observable<District[]>
  {
    return this.http.get<District[]>(this.basedestUrl+"districtDetails");
  }
  getDistrictbyId(districtId): Observable<District>
  {
    return this.http.get<District>(this.basedestUrl+districtId);
  }

  saveCompany(data): Observable<{}>
  {
    return this.http.post(this.baseUrl+"saveCompany",data);
  
  }
  deleteCompany(id): Observable<{}>
  {
    return this.http.delete(this.baseUrl+"delete/"+id,id);
  
  }

  setData(data) : void {
    this.sharedCompany = data;
  }
  getData() : StockDetails{
    return this.sharedCompany;
  }

}
