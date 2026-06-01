import { Injectable, inject, PLATFORM_ID, signal, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, switchMap, tap } from 'rxjs';
import { Router } from '@angular/router';
import { response } from 'express';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private http = inject(HttpClient);
  private baseUrl = 'http://localhost:8000';

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  currentUser = signal<any>(null);


  private sendRequest(
    url: string,
    body: any = {},
    method: 'get' | 'post' | 'put' | 'delete' = 'get'
  ): Observable<any> {

    const fullUrl = `${this.baseUrl}${url}`;

    switch (method) {
      case 'post':
        return this.http.post(fullUrl, body);
      case 'put':
        return this.http.put(fullUrl, body);
      case 'delete':
        return this.http.delete(fullUrl);
      default:
        return this.http.get(fullUrl);
    }
  }
  
  login(credentials: { username: string; password: string }): Observable<any> {
    return this.http.post(`${this.baseUrl}/api/auth/login/`, credentials).pipe(
      tap((response: any) => {                      
        if (isPlatformBrowser(this.platformId)) {  
          localStorage.setItem('token', response.token);
          localStorage.setItem('user', JSON.stringify(response.user));
        }
        this.currentUser.set(response.user);
      })
    );
  }
  loadSesion(): void{
    if (isPlatformBrowser(this.platformId)) {
      const token = localStorage.getItem('token');
      const user = localStorage.getItem('user');
      if (token && user) {
        this.currentUser.set(JSON.parse(user));
      }
    }
  }
  logout(): void {
    if (isPlatformBrowser(this.platformId)) {        
      localStorage.removeItem('token');
      localStorage.removeItem('user');               
    }
    this.currentUser.set(null);
  }

  isLoggedIn(): boolean{
    return this.currentUser() 
  }

}
