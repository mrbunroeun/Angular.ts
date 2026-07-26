import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products-package',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products-package.html',
  styleUrl: './products-package.css',
})
export class ProductsPackage {
  @Input() number = '';
  @Input() image = '';
  @Input() title = '';
  @Input() price = '';
  @Input() note = '';
  @Input() includes: string[] = [];
  @Input() list: string[] = []; // alternate name used by some pages (e.g. event-equipment-rental) instead of 'includes'
  @Input() suitableFor: string[] = []; // optional — only rendered when non-empty
  @Input() perfectFor: string[] = []; // optional — alternate label used by some pages instead of suitableFor
}