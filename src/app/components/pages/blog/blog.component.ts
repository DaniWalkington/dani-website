import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

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
    this.loadDocument();
  }

  loadDocument() {
    this.http
      .get('assets/sensitive-docs/Passivity.txt', { responseType: 'text' })
      .subscribe(
        (data) => {
          console.log(data);
        },
        (error) => {
          console.error('Error loading document', error);
        }
      );
  }
}
