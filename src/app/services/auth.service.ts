import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginService } from './login.service';
import {HttpClient  } from "@angular/common/http";
interface Post{
  userId: number;
  id: number;
  title: string;
  body: string;
}
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  getPost(postId: number): Observable<Post>{
      return this.http.get<Post>('https://jsonplaceholder.typicode.com/posts/'+postId);
  }
}
