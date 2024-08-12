import { Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { BlogComponent } from './components/pages/blog/blog.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'blog',
    component: BlogComponent,
  },
];
