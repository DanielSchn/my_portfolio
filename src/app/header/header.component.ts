import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  animations: [
    trigger('fade', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('0.5s', style({ opacity: 1 }))
      ]),
      transition('leave', [
        animate('0.5s', style({ opacity: 0 }))
      ])
    ])
  ],
})
export class HeaderComponent {
  navbarHidden =  true;


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
}
