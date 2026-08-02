import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface HeroButton {
  text: string;
  link?: string;
  style?: 'solid' | 'outline';
}

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero {
  @Input() badge = 'BRWeb'; // ← wordmark text
  @Input() badgeSub = 'CATERING & EVENTS'; // ← wordmark subtext
  @Input() sectionLabel: string | null = null; // ← set a string here to show label instead of wordmark
  @Input() heading = 'Premium Catering Services...'; // ← main H1 text
  @Input() description = 'BRWeb delivers...'; // ← paragraph text
  @Input() bgImage = 'hero_section/hero_section.png'; // ← path relative to /assets
  @Input() buttons: HeroButton[] = [
    { text: 'Contact Us', link: '#', style: 'solid' }, // ← button text/link/style
  ];

  get bgImageUrl(): string {
    // Angular serves static assets from /assets by convention
    return `/${this.bgImage}`;
  }

  // Tailwind purges dynamic class strings like `grid-cols-${n}`,
  // so map the count to a fixed, whole class name instead.
  get gridColsClass(): string {
    return this.buttons.length === 1 ? 'grid-cols-1' : 'grid-cols-2';
  }

  buttonClass(button: HeroButton): string {
    const base =
      'w-full max-w-[200px] text-center text-[14px] font-medium px-6 py-3 rounded-full transition duration-300 ease-in-out';
    const outline = 'border border-white text-white hover:bg-white hover:text-[#2e0073]';
    const solid = 'bg-[#2e0073] hover:bg-[#ffffff] hover:text-[#2e0073] text-white';
    return `${base} ${(button.style ?? 'solid') === 'outline' ? outline : solid}`;
  }
}
