import { Component } from '@angular/core';
import { DataweatherService } from '../services/dataweather.service';
import { RootObject } from 'src/types';
import { MatTable, MatTableDataSource} from '@angular/material/table';
import { Forecastday } from 'src/types';
import { Forecast } from 'src/types';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})

export class HomePageComponent {

  
  dataSource :MatTableDataSource<RootObject> = new MatTableDataSource<RootObject>();
  dataSource1: MatTableDataSource<RootObject> = new MatTableDataSource<RootObject>();
  
  data : RootObject | undefined;

  constructor(private dataRest: DataweatherService){ 
    
  }

  search : string ="";
  dis : boolean | undefined
  dis1 : boolean | undefined
  error: any;
  


  
  displayedColumns: string[] = ['day', 'prob', 'testo', 'min', 'max'];
  displayedColumns1 : string[] = ['day', 'icon','testo','temp', 'wind', 'min', 'max'];


  callApi()
  {
    this.dataRest.getDataRows("", this.search).subscribe(
      data => {
        this.data = data;
      },
      error => this.error = error
    )
  }

  clickedRows = new Set<Forecastday>();

  disable(){
   this.dis = true;
   this.dis1 = false;
  }

  enable(){
    this.dis = false;
    this.dis1 = true;
    this.clickedRows = new Set<Forecastday>();
  }
 
  
}


