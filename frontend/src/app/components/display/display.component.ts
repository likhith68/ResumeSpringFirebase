import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'display',
  templateUrl: './display.component.html',
})
export class DisplayComponent implements OnInit {
  constructor(private http: HttpClient) {
    this.loadPosts();
  }
  ngOnInit(): void {}

  posts: any;

  loadPosts() {
    let id = 'Likhith JSC';
    let url = 'http://localhost:8081/firebase/getUserDetails/' + id;
    this.http.get(url).subscribe((posts: any) => {
      this.posts = posts;
    });
  }
}
