import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
import { Navigation, NavigationItem } from '../../core/services/navigation';


@Component({
  selector: 'app-sidebar',
  imports: [CommonModule, RouterLink, RouterLinkActive, MatIconModule],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css'
})
export class Sidebar {
  navigationItems: NavigationItem[] = [];
  user={ 
    name:"xeyt",
    email:"Usuario@demo.com",
    avatar: "https://i.pravatar.cc/150?img=3"
  }

  constructor(private navigationService: Navigation) {}
  ngOnInit(): void {
    this.navigationItems = this.navigationService.getNavigationItems();
  }
}

