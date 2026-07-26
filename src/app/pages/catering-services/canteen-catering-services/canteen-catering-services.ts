import { Component } from '@angular/core';
import { Hero } from '../../../components/hero/hero';
import { Footer } from '../../../components/footer/footer';
import { Faqs } from '../../../components/faqs/faqs';

interface OfferImage {
  src: string;
  alt: string;
}

interface ServeEntry {
  title: string;
  lead: string;
  items: string[];
}

interface ServeRow {
  left: ServeEntry | null;
  right: ServeEntry | null;
}

interface WhyChoosePoint {
  text: string;
}

interface Faq {
  question: string;
  answer: string;
}

@Component({
  selector: 'app-canteen-catering-services',
  standalone: true,
  imports: [Hero, Footer, Faqs],
  templateUrl: './canteen-catering-services.html',
  styleUrl: './canteen-catering-services.css',
})
export class CanteenCateringServices {
  offerImages: OfferImage[] = [
    { src: 'canteen_catering.png', alt: 'Canteen catering' },
    { src: 'corporate_buffet_catering.png', alt: 'Corporate buffet catering' },
    { src: 'event_rental_setup.png', alt: 'Event rental setup' },
    { src: 'mobile_catering.png', alt: 'Mobile catering' },
  ];

  offerItems: string[] = [
    'Daily breakfast, lunch, and dinner services',
    'Factory and industrial canteen management',
    'School and university meal programs',
    'Office employee dining solutions',
    'Menu planning and nutrition consultation',
    'Food safety and hygiene compliance',
  ];

  serveRows: ServeRow[] = [
    {
      left: {
        title: 'Factories & Industrial Parks',
        lead: 'Daily meals for:',
        items: [
          'Garment factories',
          'Footwear manufacturers',
          'Electronics factories',
          'Food processing plants',
          'Special Economic Zones (SEZs)',
        ],
      },
      right: {
        title: 'Schools & Educational Institutions',
        lead: 'Providing:',
        items: [
          'Student lunches',
          'Teacher meals',
          'Boarding school dining',
          'University cafeterias',
        ],
      },
    },
    {
      left: {
        title: 'Corporate Offices',
        lead: 'Daily meal solutions for:',
        items: [
          'Corporate headquarters',
          'Banks',
          'Technology companies',
          'BPO and call centers',
          'Co-working spaces',
        ],
      },
      right: {
        title: 'Hospitals & Healthcare Facilities',
        lead: 'Supplying:',
        items: ['Patient meals', 'Medical staff meals', 'Visitor cafeterias', 'Healthcare events'],
      },
    },
    {
      left: {
        title: 'Government Institutions',
        lead: 'Long-term contracts for:',
        items: [
          'Ministries',
          'Municipal offices',
          'Public agencies',
          'Training institutes',
          'Government events and workshops',
        ],
      },
      right: {
        title: 'Construction & Infrastructure Projects',
        lead: 'Providing meals for:',
        items: [
          'Construction workers',
          'Engineering teams',
          'Hydropower projects',
          'Mining operations',
          'Remote development sites',
        ],
      },
    },
    {
      left: null,
      right: {
        title: 'Military & Security Organizations',
        lead: 'Potential customers include:',
        items: [
          'Military camps',
          'Police academies',
          'Training centers',
          'Public safety institutions',
        ],
      },
    },
  ];

  whyChooseUsPoints: WhyChoosePoint[] = [
    { text: 'Experienced large-scale food operations' },
    { text: 'Professional kitchen and serving staff' },
    { text: 'Consistent meal quality and taste' },
    { text: 'Strict food safety standards' },
    { text: 'Flexible menus based on customer requirements' },
  ];

  metroCateringFaqs: Faq[] = [
    {
      question: 'Can Metro Catering serve meals for different shifts, including night shifts?',
      answer:
        'Yes. We can arrange breakfast, lunch, dinner, and night-shift meals according to your operating schedule. Many factories and industrial facilities require multiple meal sessions, and our team can support 24-hour operations when needed.',
    },
    {
      question: 'Can you provide separate menus for office staff and factory workers?',
      answer: '-',
    },
    {
      question: 'How far in advance do we need to arrange a long-term canteen contract?',
      answer: '-',
    },
    {
      question: 'What happens if the number of employees changes from day to day?',
      answer: '-',
    },
    {
      question: 'If our company already has a kitchen, can Metro Catering operate it?',
      answer: '-',
    },
    {
      question:
        'Can Metro Catering handle emergency meal requests for overtime work or special events?',
      answer: '-',
    },
  ];

  // flattened version of serveRows for the mobile single-column layout
  get flatServeItems(): ServeEntry[] {
    const flat: ServeEntry[] = [];
    for (const row of this.serveRows) {
      if (row.left) flat.push(row.left);
      if (row.right) flat.push(row.right);
    }
    return flat;
  }
}
