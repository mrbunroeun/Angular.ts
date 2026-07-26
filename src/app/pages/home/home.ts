import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Button } from '../../components/button/button';

import { Footer } from '../../components/footer/footer';
import { OurCoreServices } from '../../components/our-core-services/our-core-services';

interface CateringSolutionItem {
  icon: string;
  label: string;
  width: string;
}

interface LatestEvent {
  image: string;
  label: string;
}

interface MobileCateringPackage {
  number: string;
  label: string;
}

interface WhyChooseUsPoint {
  text: string;
}

interface CoreService {
  number: string;
  title: string;
  image: string;
}

@Component({
  selector: 'app-home',
  imports: [Button, Footer, OurCoreServices, RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  readonly coreServices: CoreService[] = [
    {
      number: '01',
      title: 'Canteen Catering',
      image: 'home/our_core_services/canteen_catering.png',
    },
    { number: '02', title: 'Mobile Catering', image: 'home/our_core_services/mobile_catering.png' },
    {
      number: '03',
      title: 'Food Box & Light Refreshment Catering',
      image: 'home/our_core_services/food_box_light_refreshment_catering.png',
    },
    {
      number: '04',
      title: 'Corporate Buffet Catering',
      image: 'home/our_core_services/corporate_buffet_catering.png',
    },
    {
      number: '05',
      title: 'Event Rental & Setup',
      image: 'home/our_core_services/event_rental_setup.png',
    },
  ];

  readonly cateringSolutionItems: CateringSolutionItem[] = [
    { icon: 'offices.svg', label: 'Offices', width: 'w-20' },
    { icon: 'hotels.svg', label: 'Hotels', width: 'w-20' },
    { icon: 'factories.svg', label: 'Factories', width: 'w-20' },
    { icon: 'ngos.svg', label: 'NGOs', width: 'w-20' },
    { icon: 'construction.svg', label: 'Construction Sites', width: 'w-24' },
    { icon: 'school.svg', label: 'Schools', width: 'w-24' },
    { icon: 'goverments.svg', label: 'Government Organizations', width: 'w-28' },
  ];

  readonly latestEvents: LatestEvent[] = [
    { image: 'home/our_core_services/canteen_catering.png', label: 'Corporate Lunch Events' },
    { image: 'home/our_core_services/mobile_catering.png', label: 'Festival & Public Events' },
    {
      image: 'home/our_core_services/food_box_light_refreshment_catering.png',
      label: 'Food Display',
    },
    {
      image: 'home/our_core_services/corporate_buffet_catering.png',
      label: 'Gala Dinner Catering',
    },
    { image: 'home/our_core_services/event_rental_setup.png', label: 'Events' },
  ];

  readonly mobileCateringPackages: MobileCateringPackage[] = [
    { number: '01', label: 'Custom Corporate Package' },
    { number: '02', label: '$5 Package (Minimum 25 Pax)' },
    { number: '03', label: '$20 Premium Package' },
    { number: '04', label: '$10 Package' },
    { number: '05', label: '$15 Package' },
  ];

  readonly whyChooseUsPoints: WhyChooseUsPoint[] = [
    { text: 'Experienced large-scale food operations' },
    { text: 'Professional kitchen and serving staff' },
    { text: 'Consistent meal quality and taste' },
    { text: 'Strict food safety standards' },
    { text: 'Flexible menus based on customer requirements' },
  ];
}
