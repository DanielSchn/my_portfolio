import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {
  portfolioList = [
    {
      name: 'Join',
      img: './assets/img/join.png',
      descriptionKey: 'project_description.join_description',
      tech: 'JavaScript | HTML | CSS',
      live: 'https://join.dschneider-dev.de',
      github: 'https://github.com/DanielSchn/join_group'
    },
    {
      name: 'El Pollo Loco',
      img: './assets/img/pollo_loco.png',
      descriptionKey: 'project_description.pollo_loco_description',
      tech: 'JavaScript | HTML | CSS | OOP',
      live: 'https://polloloco.dschneider-dev.de',
      github: 'https://github.com/DanielSchn/el_pollo_loco'
    },
    {
      name: 'Placeholder',
      img: './assets/img/pokedex.png',
      descriptionKey: 'project_description.pokedex_description',
      tech: 'JavaScript | HTML | CSS | Rest Api',
      live: '#home',
      github: '#home'
    }, 
    // {
    //   name: 'Pokedex',
    //   img: './assets/img/pokedex.png',
    //   descriptionKey: 'project_description.pokedex_description',
    //   tech: 'JavaScript | HTML | CSS | Rest Api',
    //   live: 'https://daniel-schneider.developerakademie.net/pokedex/',
    //   github: 'https://github.com/DanielSchn/Pokedex_API'
    // },
  ];
}
