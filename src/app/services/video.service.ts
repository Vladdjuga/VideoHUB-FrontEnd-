import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Video } from '../models/video';

@Injectable({
  providedIn: 'root'
})
export class VideoService {

  constructor(private http: HttpClient) { }

getById(id:number):Observable<any>{
  return this.http.get<any>(`http://localhost:8080/video/get/${id}`);
}
getBySearch(search:string):Observable<any>{
  return this.http.get<any>(`http://localhost:8080/video/search/${search}`);
}
getLikes(id:number):Observable<any>{
  return this.http.get<any>(`http://localhost:8080/like/getvideo/${id}`);
}
addLike(id:number,usr:string){
  return this.http.get<any>(`http://localhost:8080/like/add-video/${id}&${usr}`);
}
isLiked(id:number,usr:string){
  return this.http.get<any>(`http://localhost:8080/like/liked-video/${id}&${usr}`);
}
}
