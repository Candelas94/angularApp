import { Routes } from '@angular/router';
import { FilmsComponent } from './films/films.component';
import {DetailsComponent} from './details/details.component';

export const routes: Routes = [
    {
        path:'',
        component: FilmsComponent,
        title: 'Home'
    },
    {
        path:'details/:id',
        component: DetailsComponent,
        title: 'Details'
    },
    
];
