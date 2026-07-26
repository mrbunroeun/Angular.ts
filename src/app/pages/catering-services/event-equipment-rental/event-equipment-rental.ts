import { Component } from '@angular/core';
import { Hero } from '../../../components/hero/hero';
import { Footer } from '../../../components/footer/footer';
import { Faqs, Faq } from '../../../components/faqs/faqs';
import { ProductsPackage } from '../../../components/products-package/products-package';

interface WhyChoosePoint {
  text: string;
}

interface EquipmentCategory {
  number: string;
  image: string;
  title: string;
  price: string;
  note: string;
  lists: string[];
}

@Component({
  selector: 'app-event-equipment-rental',
  standalone: true,
  imports: [Hero, Footer, Faqs, ProductsPackage],
  templateUrl: './event-equipment-rental.html',
  styleUrl: './event-equipment-rental.css',
})
export class EventEquipmentRental {
  packages: EquipmentCategory[] = [
    {
      number: '01',
      image: '/catering_services/mobile_catering/corporate_mobile_package.png',
      title: 'Tables & Chairs',
      price: '',
      note: '',
      lists: [
        'Banquet tables',
        'VIP tables',
        'Conference tables',
        'Plastic chairs',
        'Banquet chairs',
        'Cocktail tables',
      ],
    },
    {
      number: '02',
      image: '/catering_services/mobile_catering/corporate_mobile_package.png',
      title: 'Tents & Structures',
      price: '',
      note: '',
      lists: [
        'Banquet tables',
        'VIP tables',
        'Conference tables',
        'Plastic chairs',
        'Banquet chairs',
        'Cocktail tables',
      ],
    },
    {
      number: '03',
      image: '/catering_services/mobile_catering/corporate_mobile_package.png',
      title: 'Dining Equipment',
      price: '',
      note: '',
      lists: [
        'Banquet tables',
        'VIP tables',
        'Conference tables',
        'Plastic chairs',
        'Banquet chairs',
        'Cocktail tables',
      ],
    },
    {
      number: '04',
      image: '/catering_services/mobile_catering/corporate_mobile_package.png',
      title: 'Audio & Visual',
      price: '',
      note: '',
      lists: [
        'Banquet tables',
        'VIP tables',
        'Conference tables',
        'Plastic chairs',
        'Banquet chairs',
        'Cocktail tables',
      ],
    },
    {
      number: '05',
      image: '/catering_services/mobile_catering/corporate_mobile_package.png',
      title: 'Decorations',
      price: '',
      note: '',
      lists: [
        'Banquet tables',
        'VIP tables',
        'Conference tables',
        'Plastic chairs',
        'Banquet chairs',
        'Cocktail tables',
      ],
    },
  ];

  whoWeServeLeft: string[] = ['Weddings', 'Government events', 'Conferences', 'Exhibitions'];
  whoWeServeRight: string[] = [
    'Product launches',
    'Corporate dinners',
    'Universities',
    'Community events',
  ];

  whyChooseUsPoints: WhyChoosePoint[] = [
    { text: 'One-stop event solution' }, // NOTE: trailing whitespace trimmed from source Blade values
    { text: 'Professional installation team' },
    { text: 'High-quality equipment' },
    { text: 'Nationwide support' },
    { text: 'Flexible rental packages' },
  ];

  metroCateringFaqs: Faq[] = [
    {
      question: 'Do you rent equipment without catering services?',
      answer: 'Yes. Equipment rental can be booked independently.',
    },
    { question: 'Who handles installation and dismantling?', answer: '-' }, // NOTE: leading whitespace trimmed
    { question: 'Can equipment be delivered outside Phnom Penh?', answer: '-' },
    { question: 'Is there a minimum rental amount?', answer: '-' },
    { question: 'What happens if equipment is damaged during the event?', answer: '-' },
    {
      question: 'Can you provide complete event packages including food and equipment?',
      answer: '-',
    },
  ];
}
