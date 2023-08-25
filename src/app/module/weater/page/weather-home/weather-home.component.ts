import { WeatherDatas } from 'src/app/models/interfaces/weather.interfaces';
import { WeatherService } from './../../services/weather.service';
import { Component, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { faMagicWandSparkles, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-weather-home',
  templateUrl: './weather-home.component.html',
  styleUrls: []
})

export class WeatherHomeComponent implements OnInit{
  private readonly destroy$: Subject<void> = new Subject();
  initialCityName= 'São Paulo';
  weatherDates!: WeatherDatas;
  searchIcon = faMagnifyingGlass;
  constructor(private weatherService: WeatherService){}/*injetando serviço */

  ngOnInit(): void {
    this.getWeatherDatas(this.initialCityName);
  }

  /*criar metodo para injetar serviço */
  getWeatherDatas(cityName: string): void{
    this.weatherService.getWeatherDatas(cityName)
    .pipe(
      takeUntil(this.destroy$)/*desinscrição da assinatura para evitar vazamento de memória */
    )
    .subscribe({
      next:(response) =>{
          response && (this.weatherDates = response);
          console.log(this.weatherDates)
      },
      error: (error) => console.log(error),
    });
  }

  onSubmit(): void{
    this.getWeatherDatas(this.initialCityName);
    console.log("chamou a function")
    this.initialCityName= '';
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
