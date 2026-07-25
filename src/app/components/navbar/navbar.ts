import {
  Component,
  ElementRef,
  HostListener,
  DestroyRef,
  inject,
  signal,
  ViewChildren,
  QueryList,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Router, RouterLink, RouterLinkActive, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

interface DropdownItem {
  label: string;
  path: string;
}

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.html',
})
export class Navbar {
  private readonly router = inject(Router);
  private readonly destroyRef = inject(DestroyRef);
  private readonly elementRef = inject(ElementRef<HTMLElement>);

  private readonly HOVER_OPEN_DELAY = 80;
  private readonly HOVER_CLOSE_DELAY = 200;
  private readonly MOBILE_ANIM_MS = 300;

  readonly isMenuOpen = signal(false);
  readonly isCateringOpen = signal(false);
  readonly isMobileCateringOpen = signal(false);
  readonly isMobileMenuAnimating = signal(false);

  readonly cateringItems: DropdownItem[] = [
    { label: 'Canteen Catering Services', path: '/canteen-catering-services' },
    { label: 'Mobile Catering', path: '/mobile-catering' },
    { label: 'Corporate Buffet Catering', path: '/corporate-buffet-catering' },
    { label: 'Event Equipment Rental', path: '/event-equipment-rental' },
    { label: 'Food Box & Refreshments', path: '/food-box-and-refreshments' },
  ];

  @ViewChildren('cateringItem')
  private cateringItemRefs!: QueryList<ElementRef<HTMLAnchorElement>>;

  private openTimer: ReturnType<typeof setTimeout> | null = null;
  private closeTimer: ReturnType<typeof setTimeout> | null = null;
  private lastFocusedTrigger: HTMLElement | null = null;

  constructor() {
    this.router.events
      .pipe(
        filter((e): e is NavigationEnd => e instanceof NavigationEnd),
        takeUntilDestroyed(this.destroyRef),
      )
      .subscribe(() => {
        this.closeAllDesktop(true);
        this.closeMobileMenu();
      });

    this.destroyRef.onDestroy(() => {
      this.clearTimers();
      this.unlockBodyScroll();
    });
  }

  onTriggerEnter(): void {
    this.clearTimers();
    this.openTimer = setTimeout(() => this.isCateringOpen.set(true), this.HOVER_OPEN_DELAY);
  }

  onTriggerLeave(): void {
    this.scheduleClose();
  }

  onPanelEnter(): void {
    this.clearTimers();
  }

  onPanelLeave(): void {
    this.scheduleClose();
  }

  private scheduleClose(): void {
    this.clearTimers();
    this.closeTimer = setTimeout(() => this.isCateringOpen.set(false), this.HOVER_CLOSE_DELAY);
  }

  private clearTimers(): void {
    if (this.openTimer) {
      clearTimeout(this.openTimer);
      this.openTimer = null;
    }
    if (this.closeTimer) {
      clearTimeout(this.closeTimer);
      this.closeTimer = null;
    }
  }

  toggleCatering(event: Event): void {
    this.clearTimers();
    const next = !this.isCateringOpen();
    this.isCateringOpen.set(next);
    if (next) {
      this.lastFocusedTrigger = event.target as HTMLElement;
      queueMicrotask(() => this.focusCateringItem(0));
    }
  }

  closeAllDesktop(skipFocusReturn = false): void {
    this.clearTimers();
    if (this.isCateringOpen()) {
      this.isCateringOpen.set(false);
      if (!skipFocusReturn) {
        this.lastFocusedTrigger?.focus();
      }
    }
  }

  onDropdownKeydown(event: KeyboardEvent, index: number): void {
    const items = this.cateringItemRefs?.toArray() ?? [];
    if (!items.length) return;

    switch (event.key) {
      case 'ArrowDown':
        event.preventDefault();
        this.focusCateringItem((index + 1) % items.length);
        break;
      case 'ArrowUp':
        event.preventDefault();
        this.focusCateringItem((index - 1 + items.length) % items.length);
        break;
      case 'Home':
        event.preventDefault();
        this.focusCateringItem(0);
        break;
      case 'End':
        event.preventDefault();
        this.focusCateringItem(items.length - 1);
        break;
      case 'Escape':
        event.preventDefault();
        this.closeAllDesktop();
        break;
      case 'Tab':
        this.closeAllDesktop(true);
        break;
    }
  }

  private focusCateringItem(index: number): void {
    this.cateringItemRefs?.toArray()[index]?.nativeElement.focus();
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    if (!this.isCateringOpen()) return;
    if (!this.elementRef.nativeElement.contains(event.target as Node)) {
      this.closeAllDesktop(true);
    }
  }

  @HostListener('document:keydown.escape')
  onEscape(): void {
    this.closeAllDesktop();
    if (this.isMenuOpen()) this.closeMobileMenu();
  }

  toggleMenu(): void {
    if (this.isMobileMenuAnimating()) return;
    this.isMenuOpen() ? this.closeMobileMenu() : this.openMobileMenu();
  }

  openMobileMenu(): void {
    if (this.isMenuOpen()) return;
    this.isMobileMenuAnimating.set(true);
    this.isMenuOpen.set(true);
    this.lockBodyScroll();
    setTimeout(() => this.isMobileMenuAnimating.set(false), this.MOBILE_ANIM_MS);
  }

  closeMobileMenu(): void {
    if (!this.isMenuOpen()) return;
    this.isMobileMenuAnimating.set(true);
    this.isMenuOpen.set(false);
    this.isMobileCateringOpen.set(false);
    this.unlockBodyScroll();
    setTimeout(() => this.isMobileMenuAnimating.set(false), this.MOBILE_ANIM_MS);
  }

  toggleMobileCatering(): void {
    this.isMobileCateringOpen.update((v) => !v);
  }

  private lockBodyScroll(): void {
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    document.body.style.paddingRight = `${scrollbarWidth}px`;
    document.body.style.overflow = 'hidden';
  }

  private unlockBodyScroll(): void {
    document.body.style.overflow = '';
    document.body.style.paddingRight = '';
  }
}
