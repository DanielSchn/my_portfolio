import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
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

  constructor(public translate: TranslateService) {}

  ngAfterViewInit() {
    this.initScrollAnimation();
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
        toggleActions: "play none none none",
        onLeave: () => gsap.to(h1Element, { autoAlpha: 0 }),
        onEnterBack: () => gsap.to(h1Element, { autoAlpha: 1 })
      }
    });
  }
}
