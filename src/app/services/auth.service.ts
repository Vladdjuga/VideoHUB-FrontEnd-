import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthRequest } from '../models/authrequest';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

constructor(private http:HttpClient) { }

login(user:AuthRequest):Observable<any>{
  console.log(user);
  return this.http.post<any>(`http://localhost:8080/auth/login`,{user});
}
}
