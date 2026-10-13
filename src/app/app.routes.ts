import { Routes } from '@angular/router';

import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { Skills } from './pages/skills/skills';
import { Projects } from './pages/projects/projects';
import { Services } from './pages/services/services';
import { Experience } from './pages/experience/experience';
import { Contact } from './pages/contact/contact';

export const routes: Routes = [
  { path: '', component: Home, title: 'Home | My Portfolio' },
  { path: 'about', component: About, title: 'About | My Portfolio' },
  { path: 'skills', component: Skills, title: 'Skills | My Portfolio' },
  { path: 'projects', component: Projects, title: 'Projects | My Portfolio' },
  { path: 'services', component: Services, title: 'Services | My Portfolio' },
  { path: 'experience', component: Experience, title: 'Experience | My Portfolio' },
  { path: 'contact', component: Contact, title: 'Contact | My Portfolio' },

  { path: '**', redirectTo: '' }
];