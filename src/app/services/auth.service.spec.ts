
import { AuthService } from "./auth.service";
import { LoginService } from "./login.service";
describe('AuhtService',()=>{
  let authService: AuthService
  beforeEach(()=>{
    authService = new AuthService(new LoginService());
  })

  it('isAuth must return true if user is logged in',()=>{
    localStorage.setItem('token','hello world')
    expect(authService.isAuth()).toBeTruthy()
  })
  it('getting fake data using spy',()=>{
    const mySpy = jasmine.createSpyObj('',['isAuth'])
    mySpy.isAuth.and.returnValue(new LoginService().isLogin())
    expect(mySpy.isAuth()).toBe(true, 'wrong data')
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
