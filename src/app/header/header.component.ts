import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  navbarHidden = true;


  ngOnInit() {
    document.body.addEventListener('click', this.closeNavbar.bind(this));
  }


  ngOnDestroy() {
    document.body.removeEventListener('click', this.closeNavbar.bind(this));
  }


  toggleNavbar(event: MouseEvent) {
    event.stopPropagation();
    this.navbarHidden = !this.navbarHidden;
  }


  closeNavbar() {
    this.navbarHidden = true;
  }

  
  scrollToElement(elementId: string, yOffset: number): void {
    this.closeNavbar();
    const element = document.getElementById(elementId);
    if (element) {
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  }
}
