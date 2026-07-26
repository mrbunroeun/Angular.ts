import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface Faq {
  question: string;
  answer: string;
}

@Component({
  selector: 'app-faqs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './faqs.html',
  styleUrl: './faqs.css',
})
export class Faqs {
  @Input() faqs: Faq[] = [];

  // tracks which FAQ is currently open, across both columns.
  // starts at 0 so the first item is open by default (matches the Blade behavior).
  openIndex: number | null = 0;

  get leftFaqs(): Faq[] {
    const half = Math.ceil(this.faqs.length / 2);
    return this.faqs.slice(0, half);
  }

  get rightFaqs(): Faq[] {
    const half = Math.ceil(this.faqs.length / 2);
    return this.faqs.slice(half);
  }

  // right column indices continue on from the left column,
  // so toggle state stays unique across both columns (matches original global "close all, then open" behavior)
  rightIndexOffset(): number {
    return this.leftFaqs.length;
  }

  toggle(index: number): void {
    this.openIndex = this.openIndex === index ? null : index;
  }

  isOpen(index: number): boolean {
    return this.openIndex === index;
  }
}
