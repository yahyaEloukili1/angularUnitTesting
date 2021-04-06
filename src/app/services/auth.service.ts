import { Injectable } from '@angular/core';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private loginService : LoginService) { }
  isAuth(user : string,password: number): boolean{
   if(user && password){
     return true
   }else{
     return false
   }
  }
}
