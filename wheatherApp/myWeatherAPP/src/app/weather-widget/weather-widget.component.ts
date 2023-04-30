import { Component, OnInit } from '@angular/core';
import { WeatherAPIService } from '../services/weather-api.service';
import { WeatherData, DEFAULT_WEATHER_DATA } from './weather-data.model';
import { Observable, catchError, of, tap } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-weather-widget',
  templateUrl: './weather-widget.component.html',
  styleUrls: ['./weather-widget.component.scss']
})
export class WeatherWidgetComponent implements OnInit {
  cities = [
    { value: 'Tainan', name: '台南市' },
    { value: 'Kaohsiung', name: '高雄市' },
    { value: 'Taichung', name: '台中市' },
    { value: 'Taipei', name: '台北市' }
  ];

  cityName: string = this.cities[0].value;
  weatherData$?: Observable<WeatherData>;
  DEFAULT_WEATHER_DATA: WeatherData = DEFAULT_WEATHER_DATA;


  constructor(private weatherApi: WeatherAPIService){ }

  ngOnInit(): void {
    this.getWeatherData(this.cityName);
  }

  private getWeatherData(cityName: string): void {
    this.weatherData$ = this.weatherApi.getCityCurrentWeather(cityName).pipe(
      tap((data) => console.log('data = ', data)),
      catchError((err: HttpErrorResponse) => {
        console.error(err);
        return of(this.DEFAULT_WEATHER_DATA);
      })
    );
  }

  onCityNameChange(cityName: string) {
    console.log('cityName = ',cityName)
    this.cityName = cityName;
    this.getWeatherData(cityName);
  }

  getDateInLocalTimezone(dt: number): string {
    const localDate = new Date(dt * 1000);
    const options = { day: 'numeric', month: 'short'} as Intl.DateTimeFormatOptions;
    const formatter = new Intl.DateTimeFormat('en-US', options);
    return formatter.format(localDate);
  }
}
