import { Component } from '@angular/core';

@Component({
  selector: 'app-outlet',
  templateUrl: './outlet.component.html',
  styleUrls: ['./outlet.component.css']
})
export class OutletComponent {
  onSearchInputChange(value: string) {
    console.log('Search input changed: ', value);
    // Do something with the search input value
  }
}
