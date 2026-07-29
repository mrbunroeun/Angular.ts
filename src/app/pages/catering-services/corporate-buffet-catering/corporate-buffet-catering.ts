import { Component } from '@angular/core';
import { Hero } from '../../../components/hero/hero';
import { Footer } from '../../../components/footer/footer';
import { Faqs, Faq } from '../../../components/faqs/faqs';
import { ProductsPackage } from '../../../components/products-package/products-package';

interface WhyChoosePoint {
  text: string;
}

interface Package {
  number: string;
  image: string;
  title: string;
  price: string;
  note: string;
  includes: string[];
}

@Component({
  selector: 'app-corporate-buffet-catering',
  standalone: true,
  imports: [Hero, Footer, Faqs, ProductsPackage],
  templateUrl: './corporate-buffet-catering.html',
  styleUrl: './corporate-buffet-catering.css',
})
export class CorporateBuffetCatering {
  packages: Package[] = [
    {
      number: '01',
      image: 'home/our_core_services/corporate_buffet_catering.png',
      title: 'Standard Buffet',
      price: '$10/person',
      note: '(Minimum 50 participants)',
      includes: ['4 Main Dishes', 'Rice', 'Soup', 'Seasonal Fruit', 'Water'],
    },
    {
      number: '02',
      image: 'home/our_core_services/event_rental_setup.png',
      title: 'Corporate Buffet',
      price: '$15/person',
      note: '(Minimum 50 participants)',
      includes: ['4 Main Dishes', 'Rice', 'Soup', 'Seasonal Fruit', 'Water'],
    },
    {
      number: '03',
      image: 'home/our_core_services/food_box_light_refreshment_catering.png',
      title: 'Standard Buffet', // NOTE: same title as package 01 in the source Blade — likely meant "Premium Buffet"
      price: '$20/person',
      note: '(Minimum 50 participants)',
      includes: ['4 Main Dishes', 'Rice', 'Soup', 'Seasonal Fruit', 'Water'],
    },
  ];

  whoWeServeLeft: string[] = ['Corporate offices', 'Government ministries', 'Embassies', 'NGOs'];
  whoWeServeRight: string[] = ['Universities', 'Banks', 'Industrial parks', 'Hotels'];

  whyChooseUsPoints: WhyChoosePoint[] = [
    { text: 'Elegant buffet presentation' }, // NOTE: source Blade had "presentatio" (missing final "n") — corrected here
    { text: 'Large guest capacity' },
    { text: 'International and Khmer cuisine' },
    { text: 'Professional event staff' },
    { text: 'Flexible menu customization' },
  ];

  metroCateringFaqs: Faq[] = [
    {
      question: 'Can you accommodate 500+ guests?',
      answer:
        'Yes. We regularly handle large-scale events with several hundred or thousands of attendees.',
    },
    { question: 'Do you provide both lunch and dinner buffets?', answer: '-' },
    { question: 'Can menus be customized according to budgets?', answer: '-' },
    { question: 'Can we include halal or vegetarian options?', answer: '-' },
    { question: 'Do you provide buffet decorations?', answer: '-' },
    { question: 'How far in advance should we book?', answer: '-' },
  ];
}
