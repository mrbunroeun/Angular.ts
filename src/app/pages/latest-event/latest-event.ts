import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Hero } from '../../components/hero/hero';
import { Footer } from '../../components/footer/footer';
import { Faqs, Faq } from '../../components/faqs/faqs';

interface EventCard {
  number: string;
  image: string;
  title: string;
  description: string;
  link: string;
}

@Component({
  selector: 'app-latest-event',
  standalone: true,
  imports: [Hero, Footer, Faqs, RouterLink],
  templateUrl: './latest-event.html',
  styleUrl: './latest-event.css',
})
export class LatestEvent {
  private readonly eventImages: string[] = [
    '/latest_events/first_img.png',
    '/latest_events/second_img.png',
    '/latest_events/third_img.png',
    '/latest_events/fourth_img.png',
    '/latest_events/fith_img.png',
    '/latest_events/sixth_img.png',
    '/latest_events/seven_img.png',
    '/latest_events/image.png',
  ];

  packages: EventCard[] = Array.from({ length: 8 }, (_, i) => ({
    number: String(i + 1).padStart(2, '0'),
    image: this.eventImages[i],
    title: 'Lorem Insume',
    description:
      'Metro Catering provides ready-to-serve food boxes and coffee break refreshments designed for organizations that require efficient meal distribution without compromising quality and presentation.',
    link: `/latest-events-detail/${i + 1}`,
  }));

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
