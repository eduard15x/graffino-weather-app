/* eslint-disable prettier/prettier */
import { Controller, Get, Param, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { Observable } from 'rxjs';

@Controller('weather')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('forecast/:location')
  getWeather(@Param('location') location: string): Observable<any> {
    return this.appService.getWeather(location);
  }

  @Get('history/:location/:date')
  getHistoryWeather(@Param('location') location: string, @Param('date') date: string): Observable<any> {
    return this.appService.getHistoryWeather(location, date);
  }

  @Get('suggestion/:inputValue')
  getLocationSuggestion(@Param('inputValue') inputValue: string): Observable<any> {
    return this.appService.getLocationSuggestion(inputValue);
  }

  @Get('localstorage/:location')
  getWeatherLocalStorage(@Param('location') location:string): Observable<any> {
    return this.appService.getWeatherLocalStorage(location);
  }
}
