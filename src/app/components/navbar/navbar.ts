import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  isMenuOpen = false;
  isCateringOpen = false; // desktop dropdown
  isMobileCateringOpen = false; // mobile expandable submenu

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    document.body.style.overflow = this.isMenuOpen ? 'hidden' : '';
  }

  closeMenu() {
    this.isMenuOpen = false;
    document.body.style.overflow = '';
  }

  openCatering() {
    this.isCateringOpen = true;
  }

  closeCatering() {
    this.isCateringOpen = false;
  }

  toggleMobileCatering() {
    this.isMobileCateringOpen = !this.isMobileCateringOpen;
  }
}
