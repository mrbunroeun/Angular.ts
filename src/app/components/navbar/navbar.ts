import {
  Component,
  ElementRef,
  HostListener,
  DestroyRef,
  inject,
  signal,
  ViewChildren,
  QueryList,
  PLATFORM_ID,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Router, RouterLink, RouterLinkActive, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { DOCUMENT, isPlatformBrowser } from '@angular/common';

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
  private readonly document = inject(DOCUMENT);
  private readonly platformId = inject(PLATFORM_ID);

  private readonly HOVER_OPEN_DELAY = 80;
  private readonly HOVER_CLOSE_DELAY = 200;
  private readonly MOBILE_ANIM_MS = 300;

  readonly isMenuOpen = signal(false);
  readonly isCateringOpen = signal(false);
  readonly isCateringActive = signal(false);
  readonly isCateringSelected = signal(false);
  readonly isMobileCateringOpen = signal(false);
  readonly isMobileMenuAnimating = signal(false);

  // Single source of truth for catering links — both the desktop dropdown
  // and the mobile accordion iterate this instead of hard-coding markup twice.
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
  // FIX: mobile menu animation-lock timeout was never tracked, so a rapid
  // open/close/route-change sequence could leave dangling timers still
  // trying to touch signals after the component (or the animation) had
  // already moved on. Now tracked and always cleared before being reset.
  private mobileAnimTimer: ReturnType<typeof setTimeout> | null = null;
  private lastFocusedTrigger: HTMLElement | null = null;

  constructor() {
    this.isCateringActive.set(this.isCateringRoute());

    this.router.events
      .pipe(
        filter((e): e is NavigationEnd => e instanceof NavigationEnd),
        takeUntilDestroyed(this.destroyRef),
      )
      .subscribe(() => {
        this.closeAllDesktop(true);
        this.closeMobileMenu();
        this.isCateringActive.set(this.isCateringRoute());
      });

    this.destroyRef.onDestroy(() => {
      this.clearTimers();
      if (this.mobileAnimTimer) {
        clearTimeout(this.mobileAnimTimer);
        this.mobileAnimTimer = null;
      }
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
    // FIX: was `event.target`, which is whatever element was actually clicked
    // (e.g. the inner <svg>/<path> of the arrow icon). currentTarget is
    // guaranteed to be the element the listener is bound to — the button —
    // so focus-return after closing actually lands on a focusable element.
    const trigger = event.currentTarget as HTMLElement;
    this.lastFocusedTrigger = trigger;

    const next = !this.isCateringOpen();
    this.isCateringOpen.set(next);
    if (next) {
      queueMicrotask(() => this.focusCateringItem(0));
    }
  }

  // FIX: previously the trigger button had no keyboard affordance of its own —
  // arrow keys only worked once you were already inside the open panel, and
  // even that was unreachable (see onDropdownKeydown note below). This lets
  // ArrowDown/ArrowUp on the trigger open the panel and move focus straight in,
  // matching standard combobox/menu-button behavior.
  onTriggerKeydown(event: KeyboardEvent): void {
    if (event.key !== 'ArrowDown' && event.key !== 'ArrowUp') return;
    event.preventDefault();

    if (!this.isCateringOpen()) {
      this.lastFocusedTrigger = event.currentTarget as HTMLElement;
      this.isCateringOpen.set(true);
    }
    const targetIndex = event.key === 'ArrowUp' ? this.cateringItems.length - 1 : 0;
    queueMicrotask(() => this.focusCateringItem(targetIndex));
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
    this.armMobileAnimTimer();
  }

  closeMobileMenu(): void {
    if (!this.isMenuOpen()) return;
    this.isMobileMenuAnimating.set(true);
    this.isMenuOpen.set(false);
    this.isMobileCateringOpen.set(false);
    this.unlockBodyScroll();
    this.armMobileAnimTimer();
  }

  private armMobileAnimTimer(): void {
    if (this.mobileAnimTimer) {
      clearTimeout(this.mobileAnimTimer);
    }
    this.mobileAnimTimer = setTimeout(() => {
      this.isMobileMenuAnimating.set(false);
      this.mobileAnimTimer = null;
    }, this.MOBILE_ANIM_MS);
  }

  toggleMobileCatering(): void {
    this.isMobileCateringOpen.update((v) => !v);
  }

  private isCateringRoute(): boolean {
    const url = this.router.url || '';
    return this.cateringItems.some((item) => url === item.path || url.startsWith(`${item.path}/`));
  }

  isActivePath(path: string): boolean {
    const url = this.router.url || '';
    return url === path || url.startsWith(`${path}/`);
  }

  private lockBodyScroll(): void {
    if (!isPlatformBrowser(this.platformId)) return;
    const scrollbarWidth = window.innerWidth - this.document.documentElement.clientWidth;
    this.document.body.style.paddingRight = `${scrollbarWidth}px`;
    this.document.body.style.overflow = 'hidden';
  }

  private unlockBodyScroll(): void {
    if (!isPlatformBrowser(this.platformId)) return;
    this.document.body.style.overflow = '';
    this.document.body.style.paddingRight = '';
  }
}