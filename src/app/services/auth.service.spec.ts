
import { AuthService } from "./auth.service";
describe('AuhtService',()=>{
  let authService: AuthService
  beforeEach(()=>{
    authService = new AuthService();
  })
  afterEach(()=>{
    localStorage.removeItem('token')
  })
  it('isAuth must return true if token is in local storage',()=>{
    localStorage.setItem('token','hello world')
    expect(authService.isAuth()).toBeTruthy()
  })
  it('isAuth must return false if token is no token in local storage',()=>{

    expect(authService.isAuth()).toBeFalsy()
  })
})





























// import { TestBed } from '@angular/core/testing';

// import { AuthService } from './auth.service';

// describe('AuthService', () => {
//   let service: AuthService;

//   beforeEach(() => {
//     TestBed.configureTestingModule({});
//     service = TestBed.inject(AuthService);
//   });

//   it('should be created', () => {
//     expect(service).toBeTruthy();
//   });
// });
