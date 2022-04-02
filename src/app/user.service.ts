import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ // Decorator for a service is called Injectable
  providedIn: 'root' // Can be used everywhere
})
export class UserService {
  // Property
  baseUrl: string = "http://localhost:3918/api/users" // Comes from C# backend called prs-server-C35

  constructor(private http: HttpClient) { }

  list(): Observable<any []> {
    return this.http.get(`${this.baseUrl}`) as Observable<any[]>;
  }
    
}
