import { Component } from '@angular/core';
import { Footer } from '../../../components/footer/footer';
import { Hero } from '../../../components/hero/hero';
import { Faqs, Faq } from '../../../components/faqs/faqs';

@Component({
  selector: 'app-latest-event-detail',
  standalone: true,
  imports: [Footer, Hero, Faqs],
  templateUrl: './latest-event-detail.html',
  styleUrl: './latest-event-detail.css',
})
export class LatestEventDetail {
  // NOTE: source Blade used asset('') — an empty image path, likely a placeholder
  // never filled in. Left empty here; fill in with the real image path.
  eventImage = '';

  paragraphOne =
    'Trusted by companies, organizations, and families, Metro Catering provides complete catering and event solutions from food preparation and buffet services to equipment rental and venue setup. Trusted by companies, organizations, and families, Metro Catering provides complete catering and event solutions from food preparation and buffet rental and venue setup. Catering and event solutions from food preparation and buffet services to equipment rental and venue setup. Trusted by companies, organizations, and families, Metro Catering provides complete catering and event solutions from food preparation and buffet services to equipment rental and venue setup.';

  paragraphTwo =
    'Trusted by companies, organizations, and families, Metro Catering provides complete catering and event solutions from food preparation and buffet services to equipment rental and venue setup. Trusted by companies, organizations, and families, Metro Catering provides complete catering and event solutions from food preparation and buffet services to equipment rental and venue setup. Catering and event solutions from food preparation and buffet rental and venue setup. Trusted by companies, organizations, and families, Metro Catering provides complete catering and event solutions from food preparation and buffet services to equipment rental and venue setup. Trusted by companies, organizations, and families, Metro Catering provides complete catering and event solutions from food preparation and buffet services.';

  metroCateringFaqs: Faq[] = [
    {
      question: 'Can we order both food boxes and coffee breaks for the same event?',
      answer:
        'Yes. Many clients combine lunch boxes with morning and afternoon refreshment packages to provide a complete catering solution for seminars and workshops.',
    },
    {
      question: 'Can Metro Catering accommodate vegetarian, halal, or allergy requirements?',
      answer: '-',
    },
    { question: 'Can we add our company logo to the food boxes?', answer: '-' },
    {
      question: 'What is the latest time to confirm the final number of participants?',
      answer: '-',
    },
    { question: 'Can you deliver food boxes outside Phnom Penh?', answer: '-' },
    { question: 'What happens if additional guests arrive on the event day?', answer: '-' },
  ];

  // NOTE: whitespace/indentation cleaned from the source Blade ctaSubtext string
  footerCtaHeading = 'Need Food Boxes or Refreshments for Your Next Event?';
  footerCtaSubtext =
    'Whether you are organizing a government workshop, corporate seminar, school activity, or executive meeting, Metro Catering provides reliable and professional catering solutions tailored to your needs.';
}
