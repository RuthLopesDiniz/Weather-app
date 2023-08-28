import { faDroplet, faTemperatureHigh, faTemperatureLow, faWind } from '@fortawesome/free-solid-svg-icons';
import { WeatherDatas } from './../../../../../../models/interfaces/weather.interfaces';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: []
})

export class WeatherCardComponent{
  @Input() WeatherDatas!: WeatherDatas;
  //dados de previsão recebidos pelo componente pai

  minTemperatureIcon = faTemperatureLow;
  maxTemperatureIcon = faTemperatureHigh;
  humidityIcon = faDroplet;
  windIcon= faWind;
}
