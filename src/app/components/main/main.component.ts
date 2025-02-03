import { Component } from '@angular/core';
import { HomeComponent } from "./home/home.component";
import { AboutMeComponent } from './about-me/about-me.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactMeComponent } from './contact-me/contact-me.component';

@Component({
  selector: 'app-main',
  imports: [HomeComponent, AboutMeComponent, ProjectsComponent, ContactMeComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

}
