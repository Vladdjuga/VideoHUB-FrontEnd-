import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Video } from '../models/video';
import { VideoRequest } from '../models/videorequest';

@Injectable({
  providedIn: 'root'
})
export class VideoService {

  headers:HttpHeaders=new HttpHeaders();
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
removeLike(id:number,usr:string){
  return this.http.get<any>(`http://localhost:8080/like/remove-video/${id}&${usr}`);
}
isLiked(id:number,usr:string){
  return this.http.get<any>(`http://localhost:8080/like/liked-video/${id}&${usr}`);
}
getAll():Observable<any>{
  return this.http.get<any>(`http://localhost:8080/video/getall`);
}
uploadVideo(formData:FormData):Observable<any>{
  this.headers.append('Content-Type',"multipart/form-data");
  return this.http.post<any>(`http://localhost:8080/video/upload`,formData,{headers:this.headers});
}
getPage(items:number,page:number){
  return this.http.get<any>(`http://localhost:8080/video/get-page/${items}&${page}`);
}
}
