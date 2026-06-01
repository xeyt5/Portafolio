import { Component, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../../core/services/auth/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class LoginComponent {

  form = { username: '', password: '' };
  mensaje: string = '';
  tipoMensaje: 'success' | 'error' | '' = '';
  cargando: boolean = false;

  constructor(
    private authService: AuthService,
    private router: Router,
    private cdr: ChangeDetectorRef  
  ) {}

  onSubmit(event: Event): void {
    event.preventDefault();
    this.cargando = true;
    this.mensaje = '';
    this.tipoMensaje = '';
    this.cdr.detectChanges(); 

    this.authService.login(this.form).subscribe({
      next: res => {
        this.router.navigate(['/dashboard_admin']);
      },
      error: err => {
        this.cargando = false;
        this.mensaje = 'Usuario o contraseña incorrectos.';
        this.tipoMensaje = 'error';
        this.cdr.detectChanges(); 
      }
    });
  }
}