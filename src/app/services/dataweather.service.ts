import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RootObject } from 'src/types';

 
@Injectable({
  providedIn: 'root'
})
export class DataweatherService {

  constructor(private http: HttpClient) { }

  getDataRows(url : string, city: string): Observable<RootObject>{
    return this.http.get<RootObject>(url+"/api/?city="+city);

  }

 
}
