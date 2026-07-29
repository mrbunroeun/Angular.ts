import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Hero } from '../../../components/hero/hero';
import { Footer } from '../../../components/footer/footer';
import { Faqs, Faq } from '../../../components/faqs/faqs';
import { ProductsPackage } from '../../../components/products-package/products-package';

interface FoodPackage {
  number: string;
  image: string;
  title: string;
  price: string;
  note: string;
  includes: string[];
  perfectFor: string[];
}

interface MenuOption {
  number: string;
  image: string;
  title: string;
  items: string[];
}

interface ServeSegment {
  title: string;
  items: string[];
}

interface WhyPoint {
  title: string;
  text: string;
}

interface ProcessStep {
  step: string;
  text: string;
}

interface FeaturedEvent {
  title: string;
  lines: string[];
}

@Component({
  selector: 'app-food-box-and-refreshments',
  standalone: true,
  imports: [Hero, Footer, Faqs, ProductsPackage, RouterLink],
  templateUrl: './food-box-and-refreshments.html',
  styleUrl: './food-box-and-refreshments.css',
})
export class FoodBoxAndRefreshments {
  packages: FoodPackage[] = [
    {
      number: '01',
      image: 'home/our_core_services/canteen_catering.png',
      title: 'Standard Food Box',
      price: '$3.50 / Person',
      note: 'Minimum: 25 Boxes',
      includes: ['1 Main Dish', 'Steamed Rice', 'Seasonal Fruit', 'Drinking Water'],
      perfectFor: ['Factory meetings', 'NGO activities', 'School programs', 'Community events'],
    },
    {
      number: '02',
      image: 'home/our_core_services/food_box_light_refreshment_catering.png',
      title: 'Standard Food Box',
      price: '$5/ Person',
      note: 'Minimum: 25 Boxes',
      includes: ['1 Main Dish', 'Steamed Rice', 'Seasonal Fruit', 'Drinking Water'],
      perfectFor: ['Factory meetings', 'NGO activities', 'School programs', 'Community events'],
    },
    {
      number: '03',
      image: 'home/our_core_services/event_rental_setup.png',
      title: 'Executive Food Box',
      price: '$8/ Person',
      note: 'Minimum: 25 Boxes',
      includes: ['1 Main Dish', 'Steamed Rice', 'Seasonal Fruit', 'Drinking Water'],
      perfectFor: ['Factory meetings', 'NGO activities', 'School programs', 'Community events'],
    },
    {
      number: '04',
      image: 'home/our_core_services/corporate_buffet_catering.png',
      title: 'Refreshment & Coffee Break Packages', // NOTE: trailing space trimmed from source Blade value
      price: 'Basic Refreshment Package $2 / Person',
      note: '',
      includes: ['1 Main Dish', 'Steamed Rice', 'Seasonal Fruit', 'Drinking Water'],
      perfectFor: ['Factory meetings', 'NGO activities', 'School programs', 'Community events'],
    },
    {
      number: '05',
      image: 'home/our_core_services/canteen_catering.png',
      title: 'Business Coffee Break',
      price: '$4 / Person',
      note: '',
      includes: ['1 Main Dish', 'Steamed Rice', 'Seasonal Fruit', 'Drinking Water'],
      perfectFor: ['Factory meetings', 'NGO activities', 'School programs', 'Community events'],
    },
    {
      number: '06',
      image: 'home/our_core_services/event_rental_setup.png',
      title: 'Premium Seminar Refreshment',
      price: '$6 / Person',
      note: '',
      includes: ['1 Main Dish', 'Steamed Rice', 'Seasonal Fruit', 'Drinking Water'],
      perfectFor: ['Factory meetings', 'NGO activities', 'School programs', 'Community events'],
    },
  ];

  menuOptions: MenuOption[] = [
    {
      number: '01',
      image: 'home/our_core_services/event_rental_setup.png',
      title: 'Khmer Favorites',
      items: [
        'Chicken Amok',
        'Beef Lok Lak',
        'Stir-Fried Vegetables',
        'Fried Rice',
        'Grilled Chicken with Rice',
        'Fish Curry',
      ],
    },
    {
      number: '02',
      image: 'home/our_core_services/corporate_buffet_catering.png',
      title: 'International Options',
      items: [
        'Teriyaki Chicken',
        'Pasta Bolognese',
        'Grilled Fish Fillet',
        'Caesar Salad',
        'Roasted Chicken',
        'Beef Stroganoff',
      ],
    },
    {
      number: '03',
      image: 'home/our_core_services/event_rental_setup.png',
      title: 'Snack & Pastry Selections',
      items: [
        'Mini Sandwiches',
        'Croissants',
        'Spring Rolls',
        'Khmer Desserts',
        'Muffins',
        'Fresh Fruits',
        'Cookies',
        'Traditional Rice Cakes',
      ],
    },
  ];

  whoWeServe: ServeSegment[] = [
    {
      title: 'Corporate Offices',
      items: ['Internal meetings', 'Employee training', 'Board meetings', 'Company celebrations'],
    },
    {
      title: 'Government Institutions',
      items: ['Workshops', 'Official conferences', 'Public consultations', 'Ministry events'],
    },
    {
      title: 'Schools & Universities',
      items: [
        'Student programs',
        'Teacher workshops',
        'Graduation ceremonies',
        'Academic conferences',
      ],
    },
    {
      title: 'NGOs & International Organizations',
      items: ['Internal meetings', 'Employee training', 'Board meetings', 'Company celebrations'],
    },
    {
      title: 'Banks & Embassies',
      items: ['Executive meetings', 'VIP receptions', 'Diplomatic events'],
    },
  ];

  whyChooseUsPoints: WhyPoint[] = [
    {
      title: 'Freshly Prepared Every Day',
      text: 'All meals and snacks are prepared using quality ingredients and strict hygiene standards.',
    },
    {
      title: 'Professional Presentation',
      text: 'Food boxes and refreshment stations are neatly arranged for professional events.',
    },
    {
      title: 'On-Time Delivery',
      text: 'Our logistics team ensures punctual delivery to offices, schools, ministries, and event venues.',
    },
    {
      title: 'Corporate Branding Options',
      text: 'Custom stickers, labels, and branded packaging are available for large organizations.',
    },
    {
      title: 'Flexible Menu Customization',
      text: 'Clients can mix Khmer, Asian, vegetarian, halal, and international menus.',
    },
  ];

  ourProcessSteps: ProcessStep[] = [
    { step: 'Step 1', text: 'Choose your preferred package.' },
    { step: 'Step 2', text: 'Confirm participant numbers.' },
    { step: 'Step 3', text: 'Select menu items and dietary requirements.' },
    { step: 'Step 4', text: 'Approve the quotation.' },
    { step: 'Step 5', text: 'Metro Catering prepares and delivers your order on schedule.' },
  ];

  featuredEvents: FeaturedEvent[] = [
    {
      title: 'Featured Food Box & Refreshment Events',
      lines: [
        'Ministry Training Workshop',
        'Location: Phnom Penh',
        'Guests: 250 participants',
        'Services: Business Lunch Boxes + Coffee Break',
      ],
    },
    {
      title: 'International NGO Conference',
      lines: [
        'Location: Siem Reap',
        'Guests: 180 participants',
        'Services: Executive Food Boxes + Premium Refreshments',
      ],
    },
    {
      title: 'University Graduation Program',
      lines: [
        'Location: Battambang',
        'Guests: 400 students and staff',
        'Services: Standard Food Boxes',
      ],
    },
    {
      title: 'Corporate Leadership Seminar',
      lines: [
        'Location: Phnom Penh',
        'Guests: 120 executives',
        'Services: Executive Lunch Boxes + VIP Coffee Stations',
      ],
    },
  ];

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

  // NOTE: footer text cleaned from heavily-indented multi-line source strings in the Blade version
  footerCtaHeading = 'CATERING & EVENTS — Need Food Boxes or Refreshments for Your Next Event?';
  footerCtaSubtext =
    'Whether you are organizing a government workshop, corporate seminar, school activity, or executive meeting, Metro Catering provides reliable and professional catering solutions tailored to your needs.';
}