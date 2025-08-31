import { EventEmitter, inject, Injectable, signal } from '@angular/core';
import { ApiResponce, card } from '../types/card.type';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CardsData {
  homeLayoutCards = signal<Array<card>>([]);
  featuresCards = signal<Array<card>>([]);
  pageCards = signal<Array<card>>([]);
  themes = signal<Array<card>>([]);

  JsonData = signal<ApiResponce | null>(null);
  apikey = 'f8b3f2c615dd44b1a38141628252908';
  HTTP = inject(HttpClient);

  getWeatherFromApi(DayCount = 6, location = 'Alexandria,EG') {
    return this.HTTP.get<ApiResponce>(
      `https://api.weatherapi.com/v1/forecast.json?key=${this.apikey}&q=${location}&days=${DayCount}&units=metric`
    );
  }

  formateData(Data: ApiResponce | null) {
    if (Data == null) return;

    // the day data from the api
    this.homeLayoutCards.set([
      {
        imageSrc:
          'assets/images/' + this.JsonData()?.current.condition.code + '.svg',
        title: this.JsonData()?.current.condition.text,
        discraption: '',
      },
      {
        imageSrc: 'assets/images/c.svg',
        title:
          this.JsonData()?.forecast.forecastday[0].day.maxtemp_c.toString() +
          ' C',
        discraption: '',
      },
      {
        imageSrc: 'assets/images/wi-night-clear.svg',
        title:
          this.JsonData()?.forecast.forecastday[0].day.mintemp_c.toString() +
          ' C',
        discraption: '',
      },
      {
        imageSrc: 'assets/images/wi-humidity.svg',
        title: this.JsonData()?.current.humidity.toString() + ' %',
        discraption: undefined,
      },
      {
        imageSrc: 'assets/images/wi-strong-wind.svg',
        title:
          this.JsonData()?.current.wind_kph.toString() +
          ' Km\\h ' +
          this.JsonData()?.current.wind_dir.toString(),
        discraption: '',
      },
      {
        imageSrc: 'assets/images/wi-sunset.svg',
        title:
          this.JsonData()?.forecast.forecastday[0].day.uv.toString() + ' UV',
        discraption: undefined,
      },
    ]);

    // 5 day forcast
    let featuresCard: Array<card> = [];
    for (
      let day = 1;
      day < (this.JsonData()?.forecast?.forecastday?.length ?? 0);
      day++
    ) {
      let rawDate = this.JsonData()?.forecast.forecastday[day].date ?? "00-00-0000";
      let dateObj = new Date(rawDate);
      featuresCard.push({
        imageSrc:
          'assets/images/' +
          this.JsonData()?.forecast.forecastday[
            day
          ].day.condition.code.toString() +
          '.svg',
        title:
          dateObj.toLocaleDateString(
            'en-US',
            { weekday: 'long' }
          ) +
          ' ' +
          dateObj.toLocaleDateString(
            'en-US'
          ),
        discraption:
          'State: ' +
          this.JsonData()?.forecast.forecastday[
            day
          ].day.condition.text.toString() + 
          "\n" +
          'max temperature: ' +
          this.JsonData()?.forecast.forecastday[day].day.maxtemp_c +
          ' C\n' +
          'min temperature: ' +
          this.JsonData()?.forecast.forecastday[day].day.mintemp_c +
          ' C\n' +
          'Wind: ' +
          this.JsonData()?.forecast.forecastday[day].day.maxwind_kph +
          ' KM/H\n' +
          'UV: ' +
          this.JsonData()?.forecast.forecastday[day].day.uv,
      });
    }
    this.featuresCards.set(featuresCard);

    // advance day info
    this.pageCards.set([
      {
        imageSrc: "assets/images/wi-barometer.svg",
        title: Math.round(((this.JsonData()?.current.pressure_mb ?? 0)/ 760 ) * 10) / 10 + " atm",
        discraption: undefined
      },
      {
        imageSrc: "assets/images/wi-moon-alt-first-quarter.svg",
        title: this.JsonData()?.forecast.forecastday[0].astro.moon_phase,
        discraption: undefined
      },
      {
        imageSrc: "assets/images/wi-alien.svg",
        title: "0% Chance of Aliens",
        discraption: undefined
      }
    ])

    let hourlyData: Array<card> = [];
    for (let hour = 0; hour < (this.JsonData()?.forecast.forecastday[0].hour.length ?? 0); hour++) {
      hourlyData.push({
        imageSrc: "assets/images/wi-time-" + (hour % 12) + ".svg",
        title: (hour % 12 == 0 ? "12" : hour % 12).toString() + (hour>12?" PM":" AM"),
        discraption: "temperature: " + this.JsonData()?.forecast.forecastday[0].hour[hour].temp_c + " C\n" + 
        "wind: " +this.JsonData()?.forecast.forecastday[0].hour[hour].wind_kph + " KM/H " + this.JsonData()?.forecast.forecastday[0].hour[hour].wind_dir
      })
    }

    this.themes.set(hourlyData);

  }

  saveData(Data: ApiResponce | null) {
    if (Data == null) return;

    let currentDate = new Date();
    localStorage.setItem(
      `${currentDate.getDate()}-
      ${currentDate.getMonth()}
      -${currentDate.getFullYear()}`,
      JSON.stringify(Data)
    );
  }
}
