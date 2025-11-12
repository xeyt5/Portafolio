import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { Navigation } from '../../core/services/navigation';

@Component({
  selector: 'app-header',
  imports: [MatIconModule, MatButtonModule],
  templateUrl: './header.html',
  styleUrl: './header.css'
})

export class Header {
  constructor(private navigationService: Navigation) {}

  toggleSidebar(): void{
    this.navigationService.toggleNavigation();
  }
}
