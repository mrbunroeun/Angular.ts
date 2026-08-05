import { Component } from '@angular/core';
import { Footer } from '../../components/footer/footer';
import { Hero } from '../../components/hero/hero';
import { RouterLink } from '@angular/router';

interface FeatureItem {
  icon: string;
  label: string;
}

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RouterLink, Footer, Hero],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {
  coreValues: FeatureItem[] = [
    { icon: 'reliability.svg', label: 'Reliability' },
    { icon: 'customer_satisfaction.svg', label: 'Customer Satisfaction' },
    { icon: 'innovation.svg', label: 'Innovation' },
    { icon: 'hygiene.svg', label: 'Hygiene' },
    { icon: 'quality.svg', label: 'Quality' },
  ];

  facilities: FeatureItem[] = [
    { icon: 'kitchen_operations.svg', label: 'Kitchen Operations' },
    { icon: 'food_safety_standards.svg', label: 'Food Safety Standards' },
    { icon: 'event_equipment.svg', label: 'Event Equipment' },
    { icon: 'warehouse.svg', label: 'Warehouse' },
  ];
}
