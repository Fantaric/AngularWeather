import { Component } from '@angular/core';
import { DataweatherService } from '../services/dataweather.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {


  constructor(private dataRest: DataweatherService){ 
  }

  search : string ="";

  callApi()
  {
    this.dataRest.getDataRows("", this.search)
  }
}
