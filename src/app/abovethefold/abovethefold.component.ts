import { Component, ElementRef, inject, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { gsap } from 'gsap';

@Component({
  selector: 'app-abovethefold',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './abovethefold.component.html',
  styleUrl: './abovethefold.component.scss'
})
export class AbovethefoldComponent {
  @ViewChild('textContainer') textContainer!: ElementRef;
  router = inject(Router);
  
  ngAfterViewInit() {
    gsap.from(this.textContainer.nativeElement, {
      scale: 0,
      duration: 1,
      delay: 1,
      ease: 'elastic.out(1, 0.5)'
    });
  }

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
