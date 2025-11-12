import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Sidebar } from '../sidebar/sidebar';
import { Header } from '../header/header';
import { Navigation } from '../../core/services/navigation';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-main-layout',
  imports: [CommonModule, RouterOutlet, Sidebar, Header],
  templateUrl: './main-layout.html',
  styleUrl: './main-layout.css'
})

export class MainLayout implements OnInit{
  isSidebarOpen$!: Observable<boolean>;
  currentYear: number = new Date().getFullYear();
  
  constructor(public navigationService: Navigation) {}

  ngOnInit(): void {
    this.isSidebarOpen$ = this.navigationService.isOpen$; // ✅ nombre correcto del observable
  }
  
  toggleSidebar(): void {
    this.navigationService.toggleNavigation();
  }
}
