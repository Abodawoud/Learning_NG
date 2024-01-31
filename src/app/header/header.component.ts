import { Component, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  navLinks: string[] = ['Dashboard', 'Products', 'Clothes', 'Shoes', 'Payment'];
  isDark: boolean;

  constructor() {
    this.isDark = document.documentElement.classList.contains('dark');
  }

  light(): string {
    if (!this.isDark) {
      return 'black'
    }
    return 'white'
  }
}

console.log()
