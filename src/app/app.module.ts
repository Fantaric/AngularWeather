import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule, HttpHandler } from '@angular/common/http';
import { DataweatherService } from './services/dataweather.service';
import { MatTableModule } from '@angular/material/table'  




@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,

  ],
  imports: [
    BrowserModule,
    MatTableModule,
    MatIconModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatIconModule
  ],
  providers: [DataweatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
