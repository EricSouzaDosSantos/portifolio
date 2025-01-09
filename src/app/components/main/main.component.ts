import { Component } from '@angular/core';
import { HomeComponent } from "./home/home.component";

@Component({
  selector: 'app-main',
  imports: [HomeComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

}
