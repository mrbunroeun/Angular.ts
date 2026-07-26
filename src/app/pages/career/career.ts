import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { Footer } from '../../components/footer/footer';
import { Hero } from '../../components/hero/hero';

interface PositionOption {
  value: string;
  label: string;
}

interface HeroButton {
  text: string;
  link: string;
  style: 'solid' | 'outline';
}

@Component({
  selector: 'app-career',
  standalone: true,
  imports: [CommonModule, Footer, Hero, FormsModule],
  templateUrl: './career.html',
  styleUrl: './career.css',
})
export class Career {
  // ---- form fields ----
  fullName = '';
  email = '';
  phoneNumber = '';
  position = '';

  // ---- hero section content (passed to <app-hero-section-not-for-home>) ----
  heroSectionLabel = 'Career';
  heroHeading = 'Start Your Career With Us!';
  heroDescription =
    'Metro Catering delivers high-quality food, professional event setups, and customized catering solutions for businesses, schools, weddings, and special occasions across Cambodia.';
  heroButtons: HeroButton[] = [
    { text: 'Contact Us', link: '/contact-us', style: 'solid' },
    { text: 'View Packages', link: '/corporate-buffet-catering', style: 'solid' },
  ];

  // ---- footer content (passed to <app-footer>) ----
  ctaHeading = 'Need Food Boxes or Refreshments for Your Next Event?';
  ctaSubtext =
    'Whether you are organizing a government workshop, corporate seminar, school activity, or executive meeting, Metro Catering provides reliable and professional catering solutions tailored to your needs.';
  ctaButtonText = 'Contact Us';
  ctaLink = '/contact-us';

  // ---- custom "Position" dropdown state ----
  positionOptions: PositionOption[] = [
    { value: 'chef', label: 'Chef' },
    { value: 'server', label: 'Server' },
    { value: 'coordinator', label: 'Event Coordinator' },
  ];

  isDropdownOpen = false;
  positionTouched = false;
  activeIndex = -1;

  get positionLabel(): string {
    const found = this.positionOptions.find((o) => o.value === this.position);
    return found ? found.label : 'Select Position';
  }

  get positionError(): boolean {
    return this.positionTouched && !this.position;
  }

  toggleDropdown(): void {
    this.isDropdownOpen = !this.isDropdownOpen;
    if (this.isDropdownOpen) {
      const selectedIdx = this.positionOptions.findIndex((o) => o.value === this.position);
      this.activeIndex = selectedIdx >= 0 ? selectedIdx : 0;
    }
  }

  closeDropdown(): void {
    this.isDropdownOpen = false;
  }

  selectOption(option: PositionOption): void {
    this.position = option.value;
    this.positionTouched = false;
    this.closeDropdown();
  }

  onDropdownKeydown(event: KeyboardEvent): void {
    switch (event.key) {
      case 'ArrowDown':
        event.preventDefault();
        if (this.isDropdownOpen) {
          this.activeIndex = Math.min(this.positionOptions.length - 1, this.activeIndex + 1);
        } else {
          this.toggleDropdown();
        }
        break;
      case 'ArrowUp':
        event.preventDefault();
        if (this.isDropdownOpen) {
          this.activeIndex = Math.max(0, this.activeIndex - 1);
        } else {
          this.toggleDropdown();
        }
        break;
      case 'Enter':
      case ' ':
        event.preventDefault();
        if (this.isDropdownOpen && this.activeIndex >= 0) {
          this.selectOption(this.positionOptions[this.activeIndex]);
        } else {
          this.toggleDropdown();
        }
        break;
      case 'Escape':
        this.closeDropdown();
        break;
      case 'Tab':
        this.closeDropdown();
        break;
    }
  }

  /** Close the dropdown when the user clicks anywhere outside it. */
  onDocumentClick(event: MouseEvent, dropdownEl: HTMLElement): void {
    if (this.isDropdownOpen && !dropdownEl.contains(event.target as Node)) {
      this.closeDropdown();
    }
  }

  /** Kept for parity with the original <form> element; not currently posted anywhere. */
  onSubmit(form: NgForm): void {
    this.positionTouched = true;
    if (form.invalid || !this.position) {
      return;
    }
    // Hook up a real backend submission here if/when one exists.
  }

  submitToTelegram(): void {
    if (!this.fullName.trim() || !this.email.trim() || !this.phoneNumber.trim() || !this.position) {
      this.positionTouched = true;
      alert('Please fill in all required fields.');
      return;
    }

    const message = `New Job Application:

Full Name: ${this.fullName}
Email: ${this.email}
Phone: ${this.phoneNumber}
Position: ${this.positionLabel}

Please attach your CV and cover letter here in Telegram`;

    const encoded = encodeURIComponent(message);
    const telegramUrl = `https://t.me/HasBunRoeun?text=${encoded}`;

    window.open(telegramUrl, '_blank');
  }
}
