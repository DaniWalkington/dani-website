import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import * as fs from 'fs';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css',
})
export class BlogComponent {
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.loadDocument('assets/sensitive-docs/Passivity.txt');
    this.getDocumentList;
  }

  loadDocument(route: string) {
    this.http.get(route, { responseType: 'text' }).subscribe(
      (data) => {
        console.log(data);
      },
      (error) => {
        console.error('Error loading document', error);
      }
    );
  }
  getDocumentList() {
    var files = fs.readdirSync('/assets/sensitive-docs/');
    console.log(files);
  }
}
