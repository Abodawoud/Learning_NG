import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-defaultbar',
  templateUrl: './defaultbar.component.html',
  styleUrls: ['./defaultbar.component.css']
})
export class DefaultbarComponent {
  @Input()
  defaultNavBarLinks: string[] = [''];
}
