import { DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { User } from '../models/user';

import { LoginComponent } from './login.component';

fdescribe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let submit : DebugElement;
  let email: DebugElement;
  let password : DebugElement
let userMock : User
  beforeEach(async(() => {
    userMock = {email : 'test@tes.com',password: '1234'}
    TestBed.configureTestingModule({
      declarations: [ LoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    submit = fixture.debugElement.query(By.css('button'))
    email = fixture.debugElement.query(By.css('input[type=email]'))
    password = fixture.debugElement.query(By.css('input[type=password]'))
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('login method sould toggle sLoggedIn',()=>{
    expect(component.isLoggedIn).toBe(false,'false at first')
    component.login(userMock.email,userMock.password)
    expect(component.isLoggedIn).toBe(true,'true at second')
    component.login(userMock.email,userMock.password)
    expect(component.isLoggedIn).toBe(false,'false at third')
  })
  it('loginState()',()=>{

      expect(component.getLoginState).toMatch(/out/)
      component.login(userMock.email,userMock.password)
      expect(component.getLoginState).toMatch(/in/)

  })
  it('true must disable submit button',()=>{
    component.isLoggedIn = true
    fixture.detectChanges()
    expect(submit.nativeElement.disabled).toBeTruthy();
    component.isLoggedIn = false
    fixture.detectChanges()
    expect(submit.nativeElement.disabled).toBeFalsy();
  })
  it('submitData must emit email and pass correctly',()=>{
    let user : User
    email.nativeElement.value = userMock.email
    password.nativeElement.value = userMock.password
    component.submitData.subscribe((data: User)=>{
     user = data
    })
    submit.triggerEventHandler('click',null)
    expect(user.email).toBe(userMock.email)
    expect(user.password).toBe(userMock.password)
   
  })
});
