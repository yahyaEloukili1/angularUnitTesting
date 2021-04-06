import { TestBed } from "@angular/core/testing"
import { AuthService } from "./auth.service"
import { HttpClientModule } from "@angular/common/http";
import { HttpClientTestingModule,HttpTestingController } from "@angular/common/http/testing";
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
describe('AuthService with mock data',()=>{
  let service: AuthService
  let httpMock: HttpTestingController
  const postMock = {
    userId: 1,
    id: 2,
    title: 'my titlle',
    body: 'my body'
  };
  beforeEach(()=>{
    TestBed.configureTestingModule({
      imports : [HttpClientTestingModule]
    })
    service = TestBed.inject(AuthService)
    httpMock = TestBed.inject(HttpTestingController)
  })
  it('must get data as expected',()=>{


service.getPost(1).subscribe((data:Post)=>{
    expect(data).toEqual(postMock)
})
const req = httpMock.expectOne('https://jsonplaceholder.typicode.com/posts/1')
  expect(req.request.method).toEqual('GET')
req.flush(postMock)
httpMock.verify()
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
