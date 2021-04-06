import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { User } from "../models/user";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isLoggedIn: boolean =false
  @Output() submitData : EventEmitter<User>
  constructor() { }

  ngOnInit(): void {
  }

  login(email: string,password : string): void{
    this.isLoggedIn = !this.isLoggedIn
    this.submitData.emit({email,password})
  }
  getLoginState(): string{
      return `User is ${this.isLoggedIn ? 'logged in': ' logged out'}`
  }
}
