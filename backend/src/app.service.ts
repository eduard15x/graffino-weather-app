import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { Observable, map } from 'rxjs';

@Injectable()
export class AppService {
  constructor(private httpService: HttpService) {}

  getWeather(location: string): Observable<any> {
    const url = `http://api.weatherapi.com/v1/forecast.json?key=${process.env.SECRET_KEY}&q=${location}&days=6&aqi=yes&alerts=no`;
    return this.httpService.get(url).pipe(map((response) => response.data));
  }

  getHistoryWeather(location: string, day: string): Observable<any> {
    const url = `http://api.weatherapi.com/v1/history.json?key=${process.env.SECRET_KEY}&q=${location}&dt=${day}`;
    return this.httpService.get(url).pipe(map((response) => response.data));
  }

  getLocationSuggestion(inputValue: string): Observable<any> {
    const url = `http://api.weatherapi.com/v1/search.json?key=${process.env.SECRET_KEY}&q=${inputValue}`;
    return this.httpService.get(url).pipe(map((response) => response.data));
  }

  getWeatherLocalStorage(location: string): Observable<any> {
    const url =`http://api.weatherapi.com/v1/forecast.json?key=${process.env.SECRET_KEY}&q=${location}&days=1&aqi=yes&alerts=no`;
    return this.httpService.get(url).pipe(map((response) => response.data));
  }
}
