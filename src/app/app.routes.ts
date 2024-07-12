import { Routes } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { AutrepageComponent } from './pages/autrepage/autrepage.component';

export const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'autre', component: AutrepageComponent },
];
