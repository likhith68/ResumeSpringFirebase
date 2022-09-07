import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'CrudWithSpring';
  constructor(private http: HttpClient) {
    this.loadPosts();
  }
  posts: any;

  loadPosts() {
    let id = 'Likhith JSC';
    let url = 'http://localhost:8081/firebase/getUserDetails/' + id;
    this.http.get(url).subscribe((posts: any) => {
      this.posts = posts;
    });
  }
}
