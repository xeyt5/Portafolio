import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Theme } from './core/services/tema/theme';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('frontend');

  constructor(private themeService: Theme) {}

  ngOnInit(): void {}
}
