import { WeatherDatas } from 'src/app/models/interfaces/weather.interfaces';
import { WeatherService } from './../../services/weather.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weather-home',
  templateUrl: './weather-home.component.html',
  styleUrls: []
})

export class WeatherHomeComponent implements OnInit{
  initialCityName= 'São Paulo';
  weatherDates!: WeatherDatas;

  constructor(private weatherService: WeatherService){}/*injetando serviço */

  ngOnInit(): void {
    this.getWeatherDatas(this.initialCityName);
  }

  /*criar metodo para injetar serviço */
  getWeatherDatas(cityName: string): void{
    this.weatherService.getWeatherDatas(cityName)
    .subscribe({
      next:(response) =>{
          response && (this.weatherDates = response);
          console.log(this.weatherDates)
      },
      error: (error) => console.log(error),

    })
  }
}
