import { Component, ElementRef, ViewChild } from '@angular/core';
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

  
  ngAfterViewInit() {
    gsap.from(this.textContainer.nativeElement, {
      scale: 0,
      duration: 1,
      delay: 1,
      ease: 'elastic.out(1, 0.5)'
    });
  }
}
