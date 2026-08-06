import { Component, Input, inject } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { signal } from '@angular/core';

interface FooterCateringItem {
  label: string;
  path: string;
}

@Component({
  selector: 'app-footer',
  imports: [RouterLink],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {
  @Input() ctaHeading = 'Looking for a long-term canteen partner?';
  @Input() ctaSubtext = 'Contact our team for a customized proposal.';
  @Input() ctaButtonText = 'Contact Us';
  @Input() ctaLink = '/contact-us';

  readonly currentYear = new Date().getFullYear();

  readonly cateringItems: FooterCateringItem[] = [
    { label: 'Canteen Catering Services', path: '/canteen-catering-services' },
    { label: 'Mobile Catering', path: '/mobile-catering' },
    { label: 'Corporate Buffet Catering', path: '/corporate-buffet-catering' },
    { label: 'Event Equipment Rental', path: '/event-equipment-rental' },
    { label: 'Food Box & Refreshments', path: '/food-box-and-refreshments' },
  ];

  readonly isFooterCateringOpen = signal(false);
  private readonly router = inject(Router);

  isActivePath(path: string): boolean {
    const url = this.router.url || '';
    return url === path || url.startsWith(`${path}/`);
  }
}
