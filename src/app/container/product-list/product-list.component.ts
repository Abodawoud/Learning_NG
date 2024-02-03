import { Component, OnInit } from '@angular/core';
import { DataService } from '~/data.service';

interface Product {
  id: number;
  names: string;
  images: string;
  prices: string;
  // Add other properties if needed
}

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  data: Product[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.getData();
  }

  getData(): void {
    this.dataService.getData().subscribe((data) => {
      this.data = data;
    });//subscribe --> google it
  }

  getRandomNumber(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
