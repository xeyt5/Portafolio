import { Component } from '@angular/core';
import { AuthService } from '../../../core/services/auth/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.html',
  styleUrl: './login.css'
})


export class LoginComponent {
  form = {
    username: '',
    password: ''
  };

  constructor(private authService: AuthService) {}

  onSubmit(): void {
    this.authService.login(this.form).subscribe({
      next: (response) => {
        console.log('Login successful:', response);
      },
      error: (error) => {
        console.error('Login failed:', error);
      }
    });

  }

}
