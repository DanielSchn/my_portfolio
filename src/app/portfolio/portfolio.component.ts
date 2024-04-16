import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { gsap } from 'gsap';


@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {
  @ViewChild('myWork') myWork!: ElementRef;

  constructor() {}

  ngAfterViewInit() {
    this.initScrollAnimation();
  }

  portfolioList = [
    {
      name: 'DABubble',
      img: './assets/img/coming_soon.png',
      descriptionKey: 'project_description.dabubble_description',
      tech: 'Angular | TypeScript | Firebase | SCSS',
      live: 'https://dabubble.dschneider-dev.de',
      github: 'https://github.com/DanielSchn/'
    },
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
      name: 'Pokedex',
      img: './assets/img/pokedex.png',
      descriptionKey: 'project_description.pokedex_description',
      tech: 'JavaScript | HTML | CSS | Rest Api',
      live: 'https://test.dschneider-dev.de/',
      github: 'https://github.com/DanielSchn/Pokedex_API'
    },
  ];


  initScrollAnimation() {
    const myWorkElement = this.myWork.nativeElement;

    gsap.from(myWorkElement, {
      x: -100,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: myWorkElement,
        start: "top 80%",
        toggleActions: "play none none none"
      }
    });
  }
}
