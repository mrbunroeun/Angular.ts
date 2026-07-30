import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
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
export class LatestEventDetail implements OnInit {
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

  eventImage = '';

  constructor(
    private route: ActivatedRoute,
    private location: Location,
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const id = Number(params.get('id'));
      const index = id - 1;
      this.eventImage = this.eventImages[index] ?? this.eventImages[0];
    });
  }

  goBack(): void {
    this.location.back();
  }

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

  footerCtaHeading = 'Need Food Boxes or Refreshments for Your Next Event?';
  footerCtaSubtext =
    'Whether you are organizing a government workshop, corporate seminar, school activity, or executive meeting, Metro Catering provides reliable and professional catering solutions tailored to your needs.';
}