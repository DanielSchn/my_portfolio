import { CommonModule } from '@angular/common';
import { Component, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { gsap } from 'gsap';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  @ViewChild('mySkills') mySkills!: ElementRef;
  @ViewChildren('skillIcons') skillIcons!: QueryList<ElementRef>;

  
  ngAfterViewInit() {
    this.initScrollAnimation(this.mySkills.nativeElement, -100);
    this.skillIcons.forEach((icon) => {
      this.initScrollAnimation(icon.nativeElement, -100);
    });
  }


  initScrollAnimation(element: HTMLElement, x: number) {
    gsap.from(element, {
      x: x,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: element,
        start: "top 85%",
        // end: "bottom 10%",
        toggleActions: "play none none none",
        // onLeave: () => gsap.to(element, { autoAlpha: 0 }),
        // onEnterBack: () => gsap.to(element, { autoAlpha: 1 })
      }
    });
  }


  skillsList = [
    {
      name: 'Angular',
      url: './assets/img/icons/angular.png'
    },
    {
      name: 'TypeScript',
      url: './assets/img/icons/typescript.png'
    },
    {
      name: 'JavaScript',
      url: './assets/img/icons/javascript.png'
    },
    {
      name: 'HTML5',
      url: './assets/img/icons/html.png'
    },
    {
      name: 'CSS',
      url: './assets/img/icons/css.png'
    },
    {
      name: 'Git',
      url: './assets/img/icons/git.png'
    },
    {
      name: 'Firebase',
      url: './assets/img/icons/firebase.png'
    },
    {
      name: 'Scrum',
      url: './assets/img/icons/scrum.png'
    },
    {
      name: 'Rest Api',
      url: './assets/img/icons/rest_api.png'
    },
    {
      name: 'Material<br>Design',
      url: './assets/img/icons/materialdesign.png'
    }
  ];
}