import { CommonModule } from '@angular/common';
import { Component, ElementRef, HostListener, inject, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { Router } from '@angular/router';
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
  router = inject(Router);

  ngAfterViewInit() {
    this.initAnimations();
  }


  initAnimations() {
    if (this.shouldInitAnimation()) {
      this.initScrollAnimation(this.mySkills.nativeElement, -100);
      this.skillIcons.forEach((icon) => {
        this.initScrollAnimation(icon.nativeElement, -100);
      });
    } else {
      this.resetAnimations();
    }
  }


  initScrollAnimation(element: HTMLElement, x: number) {
    gsap.from(element, {
      x: x,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: element,
        start: "top 90%",
        end: "bottom 10%",
        toggleActions: "play pause restart reset",
        onLeave: () => gsap.to(element, { autoAlpha: 0 }),
        onEnterBack: () => gsap.to(element, { autoAlpha: 1 })
      }
    });
  }


  resetAnimations() {
    if (this.mySkills) {
      gsap.killTweensOf(this.mySkills.nativeElement);
      gsap.set(this.mySkills.nativeElement, { clearProps: "all" });
    }
    this.skillIcons.forEach((icon) => {
      gsap.killTweensOf(icon.nativeElement);
      gsap.set(icon.nativeElement, { clearProps: "all" });
    });
  }


  shouldInitAnimation(): boolean {
    const screenWidth = window.innerWidth;
    return screenWidth > 650;
  }


  @HostListener('window:resize')
  onResize() {
    this.initAnimations();
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


  scrollToElement(elementId: string, yOffset: number): void {
    if (this.router.url !== '/') {
      this.router.navigate(['/']).then(() => {
        this.performScrolling(elementId, yOffset);
      });
    } else {
      this.performScrolling(elementId, yOffset);
    }
  }


  private performScrolling(elementId: string, yOffset: number): void {
    setTimeout(() => {
      const element = document.getElementById(elementId);
      if (element) {
        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }, 0);
  }
}