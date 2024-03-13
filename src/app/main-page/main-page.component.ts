import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { AboutmeComponent } from '../aboutme/aboutme.component';
import { AbovethefoldComponent } from '../abovethefold/abovethefold.component';
import { ConnectComponent } from '../connect/connect.component';
import { SkillsComponent } from '../skills/skills.component';
import { PortfolioComponent } from '../portfolio/portfolio.component';
import { ContactComponent } from '../contact/contact.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [HeaderComponent,
    AboutmeComponent,
    AbovethefoldComponent,
    ConnectComponent,
    SkillsComponent,
    PortfolioComponent,
    ContactComponent,
    FooterComponent],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss'
})
export class MainPageComponent {

}
