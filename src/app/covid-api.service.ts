import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CovidApiService {

  constructor(private http:HttpClient) { }

  public covidReports(){
    return this.http.get("https://corona.lmao.ninja/v2/countries")
  }
}
