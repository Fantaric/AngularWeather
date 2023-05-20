import { Component } from '@angular/core';
import { DataweatherService } from '../services/dataweather.service';
import { RootObject } from 'src/types';
import { MatTable, MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {

  dataSource :MatTableDataSource<RootObject> = new MatTableDataSource<RootObject>();
  data : RootObject | undefined;

  constructor(private dataRest: DataweatherService){ 
    
  }

  search : string ="";
 
  
  displayedColumns: string[] = ['day', 'prob', 'testo', 'min', 'max'];


  callApi()
  {
    this.dataRest.getDataRows("", this.search).subscribe(
      data => {
        this.data = data;
      }
    )
  }

  stampa(){
  console.log(this.data)
  }
   
}


