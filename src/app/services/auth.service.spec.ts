import { TestBed } from "@angular/core/testing"
import { AuthService } from "./auth.service"
import { HttpClientModule } from "@angular/common/http";
interface Post{
  userId: number;
  id: number;
  title: string;
  body: string;
}
fdescribe('AuthService',()=>{
  let service: AuthService
  beforeEach(()=>{
    TestBed.configureTestingModule({
     imports: [HttpClientModule]
    })
   service =  TestBed.inject(AuthService)
  })
  it('sould get data successfuly',(done: DoneFn)=>{
    service.getPost(1).subscribe((post: Post)=>{
      console.log('data is ',post)
      expect(post.id).toBe(1)
      done();
    })
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
