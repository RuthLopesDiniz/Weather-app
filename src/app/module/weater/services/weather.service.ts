import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import  {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private apiKey= 'ee337ebc9171ba2878e87b25d607c340';

  constructor(private http: HttpClient) {}

  /*Método que fará a busca na api */
  getWeatherDatas(cityName: string): Observable<any> {
    return this.http.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&mode=json&appid=${this.apiKey}`,
     {}
     );
  }
}


