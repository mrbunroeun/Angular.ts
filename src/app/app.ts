import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink],
  template: `
    <nav class="flex gap-4 p-4">
      <a routerLink="/">Home</a>
      <a routerLink="/ohio2">Ohio2</a>
    </nav>
    <router-outlet></router-outlet>
  `,
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('my-first-angular-app');
}
