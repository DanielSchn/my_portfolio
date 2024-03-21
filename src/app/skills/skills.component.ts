import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {

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