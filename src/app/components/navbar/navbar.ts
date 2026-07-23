import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink],
  template: `
    <nav class="flex gap-4 p-4">
      <a routerLink="/">Home</a>
      <a routerLink="/about">about</a>
      <a routerLink="/contact">contact</a>
      <a routerLink="/services">services</a>
      <a routerLink="/insight">Insight</a>
    </nav>
  `,
  styleUrl: './navbar.css',
})
export class Navbar {}
