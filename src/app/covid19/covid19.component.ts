import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTab, MatTableDataSource } from '@angular/material';
import { CovidApiService } from '../covid-api.service';
import { CountryReports } from './country-reports';

@Component({
  selector: 'app-covid19',
  templateUrl: './covid19.component.html',
  styleUrls: ['./covid19.component.css']
})
export class Covid19Component implements OnInit {

  data:CountryReports[];

  displayedColumns: string[] =['country','cases','todayCases','deaths','todayDeaths','recovered','active','critical','casesPerOneMillion','deathsPerOneMillion','tests','testsPerOneMillion'];

  dataSource=new MatTableDataSource<CountryReports>(this.data);

  @ViewChild(MatPaginator, {static:true}) paginator:MatPaginator;

  @ViewChild(MatSort, {static:true}) sort:MatSort;

  constructor(private service:CovidApiService) { }



  ngOnInit() {
    this.dataSource.paginator=this.paginator
    this.dataSource.sort=this.sort
    this.getAllReports()
  }

  // ngAfterViewInit(){
  //   this.dataSource.paginator=this.paginator
  // }

  public getAllReports(){
    this.service.covidReports().subscribe((res)=>{
      this.dataSource.data=res as CountryReports[]
    })
  }

}
