import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { SharedUiComponent } from '@tigerkai/shared-ui';
import { ShellComponent } from '@tigerkai/shell';
@Component({
  standalone: true,
  imports: [
    ShellComponent,
    SharedUiComponent,
    NxWelcomeComponent,
    RouterModule,
  ],
  selector: 'tigerkai-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'tigerkai-client';
}
