import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private http = inject(HttpClient);
  private baseUrl = 'http://localhost:8000';


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
    return this.sendRequest(
      '/api/auth/login/',
      credentials,
      'post'
    ).pipe(
      switchMap((response: any) => {
        return of(response);
      })
    );
  }
}
