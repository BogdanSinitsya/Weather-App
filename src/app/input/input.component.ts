import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent {
  inputValue: string = '';

  @Output() cityChanged = new EventEmitter<string>();

  getWeatherData() {
    this.cityChanged.emit(this.inputValue);
  }

  getDeviceLocation() {
    // Код для отримання геолокації пристрою і передачі її до API.
  }
}
