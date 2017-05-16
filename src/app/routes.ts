import { Routes } from '@angular/router';
import {AboutUsComponent} from "./about-us/about-us.component";
import {AppComponent} from "./app.component";
import { CarouselComponent } from './carousel/carousel.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: CarouselComponent },
  { path: 'about-us', component: AboutUsComponent },
  /*{ path: 'login', component: LoginComponent },
   { path: 'dashboard', component: DashboardComponent }*/
];
