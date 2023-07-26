import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private http: HttpClient) { }
  title = 'Weather-App';
  inputValue: string = '';

  getWeatherData(city: string) { // Виправлена функція getWeatherData
    const apiUrl = 'https://weatherapi-com.p.rapidapi.com/current.json';
    const apiKey = 'ef2ea62c39mshb72c564fe184808p124d39jsn2dfb017c17e5';

    const options = {
      params: { q: city }, // Використовуємо передане значення міста
      headers: {
        'X-RapidAPI-Key': apiKey,
        'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
      }
    };

    this.http.get(apiUrl, options)
      .subscribe(
        (response) => {
          console.log(response);
        },
        (error) => {
          console.error(error);
        }
      );
  }
}
