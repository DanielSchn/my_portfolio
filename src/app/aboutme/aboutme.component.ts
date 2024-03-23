import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


@Component({
  selector: 'app-aboutme',
  standalone: true,
  imports: [TranslateModule, CommonModule],
  templateUrl: './aboutme.component.html',
  styleUrl: './aboutme.component.scss',
})

export class AboutmeComponent {
  @ViewChild('myH1') myH1!: ElementRef;

  constructor(public translate: TranslateService) {
    gsap.registerPlugin(ScrollTrigger);
  }

  ngAfterViewInit() {
    this.initScrollAnimation();
  }

  initScrollAnimation() {
    const h1Element = this.myH1.nativeElement;

    gsap.from(h1Element, {
      x: -100, // Startposition links vom Bildschirm
      opacity: 0,
      duration: 1.5, // Dauer der Animation in Sekunden
      scrollTrigger: {
        trigger: h1Element,
        start: "top 80%", // Startet die Animation, wenn "top" von h1 "bottom" des Viewports erreicht
        toggleActions: "play none none none"
      }
    });
  }
}
