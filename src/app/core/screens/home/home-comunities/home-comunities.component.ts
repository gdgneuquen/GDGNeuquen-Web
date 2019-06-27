import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-comunities',
  templateUrl: './home-comunities.component.html',
  styleUrls: ['./home-comunities.component.css']
})
export class HomeComunitiesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  openGroup(group) {
    switch (group) {
      case 0:
        window.open('https://t.me/gdgneuquen', '_blank');
        break;
      case 1:
        window.open('https://t.me/nuevastecno', '_blank');
        break;
      case 2:
        window.open('https://t.me/androiddojo', '_blank');
        break;
      case 3:
        window.open('https://t.me/grupoiot', '_blank');
        break;
      case 4:
        window.open('https://t.me/SegInfoNQN', '_blank');
        break;
      case 4:
        window.open('https://t.me/gamedevnqn', '_blank');
        break;
      default:
        break;
    }
  }

}
