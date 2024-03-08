import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { AboutmeComponent } from '../aboutme/aboutme.component';
import { AbovethefoldComponent } from '../abovethefold/abovethefold.component';
import { ConnectComponent } from '../connect/connect.component';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [HeaderComponent, AboutmeComponent, AbovethefoldComponent, ConnectComponent],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss'
})
export class MainPageComponent {

}
