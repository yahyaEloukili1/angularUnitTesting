import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService  implements OnInit{
   isLoggedIn: boolean
  constructor() {
    this.isLoggedIn = false
   }
  ngOnInit(): void {

  }

}
