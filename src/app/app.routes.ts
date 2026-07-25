import { Routes } from '@angular/router';

import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { Services } from './pages/services/services';
import { Contact } from './pages/contact/contact';
import { LatestEvent } from './pages/latest-event/latest-event';
import { Career } from './pages/career/career';
import path from 'path';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'about', component: About },
  { path: 'services', component: Services },
  { path: 'contact', component: Contact },
  { path: 'latest-event', component: LatestEvent },
  { path: 'career', component: Career },
];
