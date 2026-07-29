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
  suitableFor: string[];
}

@Component({
  selector: 'app-mobile-catering',
  standalone: true,
  imports: [Hero, Footer, Faqs, ProductsPackage],
  templateUrl: './mobile-catering.html',
  styleUrl: './mobile-catering.css',
})
export class MobileCatering {
  packages: Package[] = [
    {
      number: '01',
      image: 'home/our_core_services/corporate_buffet_catering.png',
      title: 'Standard Mobile Meal Package',
      price: '$5/person',
      note: '(Minimum 50 participants)',
      includes: ['1 Main Dish', '2 Side Dishes', 'Rice', 'Seasonal Fruit', 'Drinking Water'],
      suitableFor: ['Factory training', 'NGO activities', 'Community programs'],
    },
    {
      number: '02',
      image: 'home/our_core_services/event_rental_setup.png',
      title: 'Corporate Mobile Package',
      price: '$10/person',
      note: '(Minimum 50 participants)',
      includes: ['1 Main Dish', '2 Side Dishes', 'Rice', 'Seasonal Fruit', 'Drinking Water'],
      suitableFor: ['Factory training', 'NGO activities', 'Community programs'],
    },
    {
      number: '03',
      image: 'home/our_core_services/food_box_light_refreshment_catering.png',
      title: 'Food Box & Light Refreshment Catering',
      price: '$15/person',
      note: '(Minimum 50 participants)',
      includes: ['1 Main Dish', '2 Side Dishes', 'Rice', 'Seasonal Fruit', 'Drinking Water'],
      suitableFor: ['Factory training', 'NGO activities', 'Community programs'],
    },
    {
      number: '04',
      image: 'home/our_core_services/canteen_catering.png',
      title: 'VIP Outdoor Event Package', // NOTE: source Blade had a literal line break mid-string — joined here
      price: '$20/person',
      note: '(Minimum 50 participants)',
      includes: ['1 Main Dish', '2 Side Dishes', 'Rice', 'Seasonal Fruit', 'Drinking Water'],
      suitableFor: ['Factory training', 'NGO activities', 'Community programs'],
    },
  ];

  whoWeServeLeft: string[] = [
    'Construction projects',
    'Government ministries',
    'NGOs & international organizations',
    'Agricultural exhibitions',
    'Corporate roadshows',
  ];

  whoWeServeRight: string[] = [
    'Sports competitions',
    'Religious ceremonies',
    'Community outreach programs',
    'Provincial events',
  ];

  whyMetroCatering: string[] = [
    'Fully mobile kitchen operations',
    'Fresh food prepared on-site',
    'Capacity for 100–3,000 guests',
    'Reliable logistics throughout Cambodia',
    'Experienced event coordinators',
    'Food safety and hygiene compliance',
  ];

  featuredEvents: string[] = [
    'National agricultural exhibitions',
    'Factory family day celebrations',
    'Provincial government workshops',
    'Company team-building retreats',
    'Temple and community festivals',
    'Outdoor concerts and public gatherings',
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
      question: 'Can you provide mobile catering outside Phnom Penh?',
      answer:
        'Yes. We regularly serve events in Kandal, Siem Reap, Battambang, Kampong Cham, Sihanoukville, and other provinces.',
    },
    { question: 'How much space do you need for an on-site kitchen setup?', answer: '-' },
    { question: 'Can you prepare food entirely on-site?', answer: '-' },
    { question: 'What happens if guest numbers increase on the event day?', answer: '-' },
    { question: 'Can you support events lasting multiple days?', answer: '-' },
    { question: 'Do you provide staff and serving equipment?', answer: '-' },
  ];
}
