import { AppComponent } from "./app.component";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { AuthService } from "./services/auth.service";
describe('',()=>{

let component : AppComponent
let fixture : ComponentFixture<AppComponent>
let authService : AuthService
beforeEach(()=>{

  fixture = TestBed.createComponent(AppComponent)
  component = fixture.componentInstance
  authService = TestBed.inject(AuthService)
})
it('should create app component',()=>{
  expect(component).toBeTruthy()
})
it('should create app component',()=>{
  expect(component.title).toBe('angularTesting')
})
it('can login',()=>{
  expect(component.canLogin('hello world',123)).toBeTruthy()
})

})































































// import { TestBed, async } from '@angular/core/testing';
// import { RouterTestingModule } from '@angular/router/testing';
// import { AppComponent } from './app.component';

// describe('AppComponent', () => {
//   beforeEach(async(() => {
//     TestBed.configureTestingModule({
//       imports: [
//         RouterTestingModule
//       ],
//       declarations: [
//         AppComponent
//       ],
//     }).compileComponents();
//   }));

//   it('should create the app', () => {
//     const fixture = TestBed.createComponent(AppComponent);
//     const app = fixture.componentInstance;
//     expect(app).toBeTruthy();
//   });

//   it(`should have as title 'angularTesting'`, () => {
//     const fixture = TestBed.createComponent(AppComponent);
//     const app = fixture.componentInstance;
//     expect(app.title).toEqual('angularTesting');
//   });

//   it('should render title', () => {
//     const fixture = TestBed.createComponent(AppComponent);
//     fixture.detectChanges();
//     const compiled = fixture.nativeElement;
//     expect(compiled.querySelector('.content span').textContent).toContain('angularTesting app is running!');
//   });
// });
