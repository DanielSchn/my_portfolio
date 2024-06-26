import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})


export class HeaderComponent {


  constructor(public translate: TranslateService, private router: Router) { }


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
    if (this.router.url !== '/') {
      this.router.navigate(['/']).then(() => {
        this.performScrolling(elementId, yOffset);
      });
    } else {
      this.performScrolling(elementId, yOffset);
    }
  }


  private performScrolling(elementId: string, yOffset: number): void {
    this.closeNavbar();
    setTimeout(() => {
      const element = document.getElementById(elementId);
      if (element) {
        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }, 0);
  }


  switchLanguage(lang: string) {
    this.translate.use(lang);
  }

  
  isCurrentLang(lang: string): boolean {
    return this.translate.currentLang === lang;
  }
}