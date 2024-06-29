import { CommonModule } from '@angular/common';
import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
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

  constructor() { }

  ngAfterViewInit() {
    this.initAnimations();
  }


  initScrollAnimation() {
    const myWorkElement = this.myWork.nativeElement;
    gsap.from(myWorkElement, {
      x: -100,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: myWorkElement,
        start: "top 90%",
        end: "bottom 15%",
        toggleActions: "play pause restart reset",
        onLeave: () => gsap.to(myWorkElement, { autoAlpha: 0 }),
        onEnterBack: () => gsap.to(myWorkElement, { autoAlpha: 1 })
      }
    });
  }


  initAnimations() {
    if (this.shouldInitAnimation()) {
      this.initScrollAnimation();
    } else {
      this.resetAnimations();
    }
  }


  shouldInitAnimation(): boolean {
    const screenWidth = window.innerWidth;
    return screenWidth > 650;
  }


  @HostListener('window:resize')
  onResize() {
    this.initAnimations();
  }


  resetAnimations() {
    if (this.myWork) {
      gsap.killTweensOf(this.myWork.nativeElement);
      gsap.set(this.myWork.nativeElement, { clearProps: "all" });
    }
  }


  portfolioList = [
    {
      name: 'DABubble',
      img: './assets/img/dabubble.png',
      descriptionKey: 'project_description.dabubble_description',
      tech: 'Angular | TypeScript | Firebase | SCSS',
      live: 'https://dabubble.dschneider-dev.de',
      github: 'https://github.com/DanielSchn/DABubble'
    },
    {
      name: 'Join',
      img: './assets/img/join.png',
      descriptionKey: 'project_description.join_description',
      tech: 'JavaScript | HTML | CSS',
      live: 'https://join.dschneider-dev.de',
      github: 'https://github.com/DanielSchn/join'
    },
    {
      name: 'El Pollo Loco',
      img: './assets/img/pollo_loco.png',
      descriptionKey: 'project_description.pollo_loco_description',
      tech: 'JavaScript | HTML | CSS | OOP',
      live: 'https://polloloco.dschneider-dev.de',
      github: 'https://github.com/DanielSchn/el_pollo_loco'
    },
    // {
    //   name: 'Portfolio',
    //   img: './assets/img/portfolio.png',
    //   descriptionKey: 'project_description.portfolio_description',
    //   tech: 'Angular | TypeScript | SCSS | GSAP',
    //   live: 'https://dschneider-dev.de/',
    //   github: 'https://github.com/DanielSchn/my_portfolio'
    // }
  ];
}
