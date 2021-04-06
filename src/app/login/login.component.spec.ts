import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';

fdescribe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('login method sould toggle sLoggedIn',()=>{
    expect(component.isLoggedIn).toBe(false,'false at first')
    component.login()
    expect(component.isLoggedIn).toBe(true,'true at second')
    component.login()
    expect(component.isLoggedIn).toBe(false,'false at third')
  })
  it('loginState()',()=>{

      expect(component.getLoginState).toMatch(/out/)
      component.login()
      expect(component.getLoginState).toMatch(/in/)

  })
});
