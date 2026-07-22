import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FooterComponent } from './layout/footer/footer.component';
import { HeaderComponent } from './layout/header/header.component';
import { ProgressBarComponent } from './layout/progress-bar/progress-bar.component';
import { MainComponent } from './features/main/main.component';

@Component({
  selector: 'app-root',
  imports: [ProgressBarComponent, HeaderComponent, MainComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {}
