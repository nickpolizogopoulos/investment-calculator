import { Routes } from '@angular/router';
import { AppComponent } from './app.component';

export const routes: Routes = [
    {
        path: '',
        component: AppComponent,
        title: 'Investment Calculator'
    },
    {
        path: '**',
        redirectTo: ''
    }
];
