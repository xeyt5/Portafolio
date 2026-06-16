import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../../core/services/auth/auth.service';
import { ConfirmLoginDialog } from '../../shared/confirm-login-dialog/confirm-login-dialog';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})

export class LoginComponent {
  form = {
    username: '',
    password: ''
  };

  constructor(
    private authService: AuthService,
    private router: Router,
    private dialog: MatDialog
  ) {}

  onSubmit(event: Event): void {
    event.preventDefault(); 
    
    console.log('Angular está vivo y el navegador NO se recargó');
    console.log('Datos capturados:', this.form);

    this.authService.login(this.form).subscribe({
      next: res => {
        if (res && res.token) {
            const dialogRef = this.dialog.open(ConfirmLoginDialog, {
            width: '300px',
            data: { message: '¿Inicio de sesión exitoso?' }
          });
          console.log('Login successful:', res);
          this.router.navigate(['/dashboard-admin']);
        } else {
          console.error('Login failed: No token received');
        }
      },
      error: err => console.error('Login failed', err)
    });
  }
}