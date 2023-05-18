import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataweatherService {

  constructor(private http: HttpClient) { }

  getDataRows(url : string, city: string): Observable<any>{
    return this.http.get<any>(url+"/api/?city="+city);
  }

 
}
