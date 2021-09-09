import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Video } from '../models/video';

@Injectable({
  providedIn: 'root'
})
export class VideoService {

  constructor(private http: HttpClient) { }

  getById(id: number): Observable<any> {
    return this.http.get<any>(`http://localhost:8080/video/get/${id}`);
  }
  
}
