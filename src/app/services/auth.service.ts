import { Injectable } from '@angular/core';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private loginService : LoginService) { }
  isAuth(): boolean{
    return this.loginService.isLogin();
  }
}
