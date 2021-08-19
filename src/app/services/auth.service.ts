import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthRequest } from '../models/authrequest';
import { Claim } from '../models/claim';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

constructor(private http:HttpClient) { }

login(user:AuthRequest):Observable<Claim>{
  return this.http.post<Claim>(`http://localhost:8080/auth/login`,user);
}
}
