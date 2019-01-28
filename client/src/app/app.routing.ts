
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { HomeComponent } from './acme/home/home.component';
import { AboutComponent } from './acme/about/about.component';
import { ServicesComponent } from './acme/services/services.component';


export const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'home' },
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'services', component: ServicesComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
