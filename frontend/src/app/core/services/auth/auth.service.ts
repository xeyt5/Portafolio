import { Injectable, inject } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class AuthService {
    private http = inject(HttpClient);
    private apiUrl = 'http://localhost:8000/api/auth/';

    login(credentials: { username: string; password: string }): Observable<any> {
        return this.http.post<any>(`${this.apiUrl}login/`, credentials);
    }
}
