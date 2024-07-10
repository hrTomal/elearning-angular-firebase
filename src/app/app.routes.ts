import { Routes } from '@angular/router';
import { ComingSoonComponent } from './components/coming-soon/coming-soon.component';
import { DashboardComponent } from './components/portal/dashboard/dashboard.component';
import { LoginComponent } from './components/authentication/login/login.component';
import { RegisterComponent } from './components/authentication/register/register.component';

export const routes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'test', component: ComingSoonComponent },
    { path: 'coming-soon', component: ComingSoonComponent },
    { path: 'user-dashboard', component: DashboardComponent },
    { path: 'portal-dashboard', component: DashboardComponent },
];
