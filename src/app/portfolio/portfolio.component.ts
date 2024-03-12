import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {
  portfolioList = [
    {
      name: 'Join',
      img: './assets/img/join.png',
      imgHover: './assets/img/join_screen.png',
      description: 'Task manager inspired by the Kanban System.',
      tech: 'JavaScript | HTML | CSS',
      live: 'https://join.dschneider-dev.de',
      github: 'https://github.com/DanielSchn/join_group'
    },
    {
      name: 'El Pollo Loco',
      img: './assets/img/pollo_loco.png',
      imgHover: './assets/img/pollo_loco_screen.png',
      description: 'Jump, run and throw game based on object oriented development.',
      tech: 'JavaScript | HTML | CSS | OOP',
      live: 'https://polloloco.dschneider-dev.de',
      github: 'https://github.com/DanielSchn/el_pollo_loco'
    },
    {
      name: 'Comming soon',
      img: './assets/img/pollo_loco.png',
      imgHover: './assets/img/pollo_loco_screen.png',
      description: 'Jump, run and throw game based on object oriented development.',
      tech: 'JavaScript | HTML | CSS | OOP',
      live: 'https://polloloco.dschneider-dev.de',
      github: 'https://github.com/DanielSchn/el_pollo_loco'
    },
  ];
}
