import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WeatherData } from '../weather-widget/weather-data.model';

@Injectable({
  providedIn: 'root'
})
export class WeatherAPIService {
  private apiKey: string = '8c064c5ea2ed50ce177d349404996a10';

  constructor(private http: HttpClient) { }

  getCityCurrentWeather(cityName: string): Observable<WeatherData>{
    return this.http.get<WeatherData>(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${this.apiKey}&units=metric`)
  }
}
