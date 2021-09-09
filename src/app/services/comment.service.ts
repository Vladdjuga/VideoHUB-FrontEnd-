import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Claim } from '../models/claim';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private http: HttpClient) { }

  getById(id: number): Observable<any> {
    return this.http.get<any>(`http://localhost:8080/comment/vid-com/${id}`);
  }
  
  getMainComments(id: number):Observable<any>{
    return this.http.get<any>(`http://localhost:8080/comment/maincomments/${id}`);
  }

  Add(comm: Comment): Observable<Claim> {
    return this.http.post<Claim>(`http://localhost:8080/comment/add`, comm);
  }

  Update(comm: Comment): Observable<Claim> {
    return this.http.post<Claim>(`http://localhost:8080/comment/update`, comm);
  }

  Remove(id: number): Observable<Claim> {
    return this.http.delete<Claim>(`http://localhost:8080/comment/remove/${id}`);
  }


}
