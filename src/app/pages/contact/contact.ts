import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

interface CateringLink {
  label: string;
  link: string;
}

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  // Passed in by pages that render a CTA above/within the footer
  // (currently not used by the markup below — see note).
  @Input() ctaHeading = '';
  @Input() ctaSubtext = '';
  @Input() ctaButtonText = '';
  @Input() ctaLink = '';

  /** Replaces Blade's {{ date('Y') }} */
  readonly currentYear = new Date().getFullYear();

  /** "Catering Services" expandable submenu state (was a manual DOM toggle in Blade) */
  isCateringOpen = false;

  readonly cateringLinks: CateringLink[] = [
    { label: 'Canteen Catering Services', link: '/canteen-catering-services' },
    { label: 'Mobile Catering', link: '/mobile-catering' },
    { label: 'Corporate Buffet Catering', link: '/corporate-buffet-catering' },
    { label: 'Event Equipment Rental', link: '/event-equipment-rental' },
    { label: 'Food Box & Refreshments', link: '/food-box-and-refreshments' },
  ];

  toggleCatering(): void {
    this.isCateringOpen = !this.isCateringOpen;
  }
}
