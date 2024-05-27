import { CommonModule } from '@angular/common';
import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { gsap } from 'gsap';

@Component({
  selector: 'app-aboutme',
  standalone: true,
  imports: [TranslateModule, CommonModule],
  templateUrl: './aboutme.component.html',
  styleUrl: './aboutme.component.scss',
})

export class AboutmeComponent {
  @ViewChild('myH1') myH1!: ElementRef;

  constructor(public translate: TranslateService) { }

  ngAfterViewInit() {
    this.initAnimations();
  }


  initAnimations() {
    if (this.shouldInitAnimation()) {
      this.initScrollAnimation();
    } else {
      this.resetAnimations();
    }
  }


  @HostListener('window:resize')
  onResize() {
    this.initAnimations();
  }


  resetAnimations() {
    if (this.myH1) {
      gsap.killTweensOf(this.myH1.nativeElement);
      gsap.set(this.myH1.nativeElement, { clearProps: "all" });
    }
  }


  shouldInitAnimation(): boolean {
    const screenWidth = window.innerWidth;
    return screenWidth > 650;
  }


  initScrollAnimation() {
    const h1Element = this.myH1.nativeElement;
    gsap.from(h1Element, {
      x: -100,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: h1Element,
        start: "top 90%",
        end: "bottom 20%",
        toggleActions: "play pause restart reset",
        onLeave: () => gsap.to(h1Element, { autoAlpha: 0 }),
        onEnterBack: () => gsap.to(h1Element, { autoAlpha: 1 })
      }
    });
  }
}
