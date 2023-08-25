/*o angular é um framework que trás consigo o conceito de módulos */

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {HttpClientModule} from "@angular/common/http"
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeatherHomeComponent } from './module/weater/page/weather-home/weather-home.component';
import { WeatherCardComponent } from './module/weater/page/weather-home/components/weather-card/weather-card.component';

@NgModule({
  declarations: [
    AppComponent,
    WeatherHomeComponent,
    WeatherCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    FontAwesomeModule
  ],
  providers: [],/*serviços que iremos injetar dentro do componente */
  bootstrap: [AppComponent]
})
export class AppModule { }
