import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

constructor(private http:HttpClient) { }
  
get():Observable<User[]>{
  return this.http.get<User[]>("http://localhost:8080/user/users");
}
getImage(id:number):Observable<any>{
  return this.http.get<any>(`http://localhost:8080/user/image/${id}`);
}

}
