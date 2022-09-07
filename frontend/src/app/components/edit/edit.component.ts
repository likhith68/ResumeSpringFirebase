import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Stringifier } from 'postcss';

@Component({
  selector: 'edit',
  templateUrl: './edit.component.html',
})
export class EditComponent implements OnInit {
  constructor(private http: HttpClient, private router: Router) {
    this.loadPosts();
  }
  ngOnInit(): void {}
  posts: any;
  model: EditResume = {
    name: 'Likhith JSC',
    email: '',
    phoneNumber: '',
    portfolioLink: '',
    linkedinLink: '',
    githubLink: '',
    description: '',
    profileSummary: '',
    personalQualities: '',
    personalDetails: '',
    education: '',
    certifications: '',
    skills: '',
    workExperience: '',
    projects: '',
    miniProjects: '',
    profileImage: '',
  };

  loadPosts() {
    let id = 'Likhith JSC';
    let url = 'http://localhost:8081/firebase/getUserDetails/' + id;
    this.http.get(url).subscribe((posts: any) => {
      this.posts = posts;
    });
  }

  checkEditInput(): void {
    alert(this.model.name);
  }

  putPosts() {
    this.http
      .put('http://localhost:8081/firebase/updateUser', this.model)
      .subscribe(
        (res) => {
          this.router.navigateByUrl('/display');
        },
        (err) => {
          this.router.navigateByUrl('/display');
        }
      );
  }
}

export interface EditResume {
  name: string;
  email: string;
  phoneNumber: string;
  portfolioLink: string;
  linkedinLink: string;
  githubLink: string;
  description: string;
  profileSummary: string;
  personalQualities: string;
  personalDetails: string;
  education: string;
  certifications: string;
  skills: string;
  workExperience: string;
  projects: string;
  miniProjects: string;
  profileImage: string;
}
