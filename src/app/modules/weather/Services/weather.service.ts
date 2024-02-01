import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  //esse decorator vai injetar essa dependência em um componente
  providedIn: 'root',
})
export class WeatherService {
  private apiKey:string = 'b3b20f1f71c17444c8d262ab50d9d8a4';

  constructor(private http:HttpClient) {}

  getWeatherDatas(cityName:string):Observable<any> {
    return this.http.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&mode=json&appid=${this.apiKey}`,{})
  }
}
