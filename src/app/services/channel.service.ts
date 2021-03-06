import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChannelService {

  constructor(private http: HttpClient) { }

getById(id:number):Observable<any>{
  return this.http.get<any>(`http://localhost:8080/channel/get/${id}`);
}
getByUserId(id:number):Observable<any>{
  return this.http.get<any>(`http://localhost:8080/channel/get-user/${id}`);
}
}
