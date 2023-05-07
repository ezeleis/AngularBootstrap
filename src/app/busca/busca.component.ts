import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-busca',
  template: `
    <label for="search-input">Search:</label>
    <input type="text" id="search-input" (keyup)="onSearchInput($event)" />
  `
})
export class BuscaComponent {
  @Output() searchInputChange = new EventEmitter<string>();

  onSearchInput(event: KeyboardEvent) {
    const value = (event.target as HTMLInputElement).value;
    this.searchInputChange.emit(value);
    console.log('Typed key: ', value);
  }
}
