import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { Navigation } from '../../core/services/navigation';
import { CommonModule } from '@angular/common';
import { MatMenuModule } from '@angular/material/menu';
import { Theme } from '../../core/services/tema/theme';



@Component({
  selector: 'app-header',
  imports: [MatIconModule, MatButtonModule, MatMenuModule, CommonModule],
  templateUrl: './header.html',
  styleUrl: './header.css'
})

export class Header {
  isDarkMode = false;

  constructor(
    private navigationService: Navigation,
    public themeservice: Theme
  ) {}

  ngOnInit(): void {
    this.isDarkMode = this.themeservice.isDarkTheme;
  }
  toggleSidebar(): void{
    this.navigationService.toggleNavigation();
  }

  toggleTheme(): void {
    this.themeservice.toggleTheme();
    this.isDarkMode = this.themeservice.isDarkTheme;
  }
  
  setLightMode(): void{
    this.themeservice.setTheme(false);
  }
  setDarkMode(): void{
    this.themeservice.setTheme(true);
  }

}
