import {Component} from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { throwError } from 'rxjs';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  downloadCurriculo(): void{
    const link = document.createElement('a');
    link.href = '/Eric-Souza-Dos-Santos-Curriculo.pdf'

    link.download = 'Curriculo-Eric-Souza.pdf'

    link.click()
  }
}