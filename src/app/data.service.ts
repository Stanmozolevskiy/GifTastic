import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DataResponse } from './data';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private httpClient: HttpClient) { }

  baseurl:string = "https://api.tenor.com/v1/search?q=";
  key:string= "&key=LHBU6VVIEG68";

  get(query:string):Observable<DataResponse>{
    return this.httpClient.get<DataResponse>(`${this.baseurl}${query}${this.key}`)
  }
}
