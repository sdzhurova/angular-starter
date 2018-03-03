import { Routes, RouterModule } from '@angular/router';
import { Home, NoContent } from './containers';

export const ROUTES: Routes = [
  { path: '', component: Home },
  { path: '**', component: NoContent },
];
