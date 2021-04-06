import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularTesting';

  hello(){
    return 'hello world';
  }
  hello2(){
    return 'hello world';
  }
}
