import { Component } from '@angular/core';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent {
  searchText: string = 'Women Shoes';
  updateSearchText() {
    console.log('Search text updated:', this.searchText); // Log the updated searchText
  }
}
