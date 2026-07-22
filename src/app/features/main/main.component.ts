import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AboutMeComponent } from './about-me/about-me.component';
import { CertificationsComponent } from './certifications/certifications.component';
import { ContactMeComponent } from './contact-me/contact-me.component';
import { CoursesComponent } from './courses/courses.component';
import { EducationComponent } from './education/education.component';
import { ExperienceComponent } from './experience/experience.component';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';

@Component({
  selector: 'app-main',
  imports: [
    HomeComponent,
    AboutMeComponent,
    ExperienceComponent,
    ProjectsComponent,
    CertificationsComponent,
    EducationComponent,
    CoursesComponent,
    ContactMeComponent,
  ],
  templateUrl: './main.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainComponent {}
