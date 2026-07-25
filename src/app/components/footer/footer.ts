import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

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
}
