import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
})
export class MenuComponent {
  constructor() {

  }

  menuItems: object[] = [
    {
      id: 'weather',
      label: 'Weather',
      link: '/weather',
    },
    {
      id: 'quiz',
      label: 'Quiz',
      link: '/quiz',
    },
    {
      id: 'football',
      label: 'Football',
      link: '/football',
    }
  ]
}