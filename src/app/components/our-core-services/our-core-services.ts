import { Component, Input, HostBinding } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-our-core-services',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './our-core-services.html',
  styleUrl: './our-core-services.css',
})
export class OurCoreServices {
  @Input() number = '01';
  @Input() title = 'Service Title';
  @Input() image: string | null = null;

  @HostBinding('class') hostClass = 'block h-full';

  get imageSrc(): string {
    return this.image ? `/${this.image}` : '/placeholder.png';
  }
}
