import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
import { Navigation, NavigationItem } from '../../core/services/navigation';
import { AuthService } from '../../core/services/auth/auth.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmLogoutDialog } from '../../modules/shared/confirm-logout-dialog/confirm-logout-dialog';
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
    avatar: "https://i.pravatar.cc/150?img=2"
  }
  

  constructor(private navigationService: Navigation, public authService: AuthService, private router: Router, private dialog: MatDialog) {}
  ngOnInit(): void {
    this.navigationItems = this.navigationService.getNavigationItems();
  }
  logout(): void {
    const dialogRef = this.dialog.open(ConfirmLogoutDialog, {
      width: '300px',
      data: { message: '¿Estás seguro de que deseas cerrar sesión?' }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.authService.logout();
        this.router.navigate(['/auth/login']);

      }
    });
  }
}

