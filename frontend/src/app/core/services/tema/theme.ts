import { Injectable, inject, PLATFORM_ID } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class Theme {

  private platformId = inject(PLATFORM_ID);

  private _isDarkTheme = new BehaviorSubject<boolean>(false);
  isDarkTheme$ = this._isDarkTheme.asObservable();

  constructor() {
    if (isPlatformBrowser(this.platformId)) {
      this.initTheme();
    }
  }

  private initTheme(): void {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia?.('(prefers-color-scheme: dark)').matches ?? false;

    const isDark = savedTheme ? savedTheme === 'dark' : prefersDark;
    this.setTheme(isDark);
  }

  setTheme(isDark: boolean): void {
    this._isDarkTheme.next(isDark);

    if (!isPlatformBrowser(this.platformId)) return;

    const html = document.documentElement;

    if (isDark) {
      html.classList.add('dark');
      html.classList.remove('light');
      localStorage.setItem('theme', 'dark');
    } else {
      html.classList.add('light');
      html.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }

  toggleTheme(): void {
    this.setTheme(!this._isDarkTheme.value);
  }

  get isDarkTheme(): boolean {
    return this._isDarkTheme.value;
  }
}
