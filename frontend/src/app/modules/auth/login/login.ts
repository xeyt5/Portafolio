import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../../core/services/auth/auth.service';

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
    private router: Router
  ) {}

onSubmit(): void {
  console.log('🔥 Angular está vivo');
  console.log(this.form);

  this.authService.login(this.form).subscribe({
    next: res => console.log('✅ Login OK', res),
    error: err => console.error('❌ Login failed', err)
  });
}


}
