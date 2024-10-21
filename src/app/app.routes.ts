import { Routes } from '@angular/router';
import { HomeComponent } from './Pages/home/home.component';
import { LoginComponent } from './Pages/login/login.component';
import { SignupComponent } from './Pages/signup/signup.component';
import { ShowAllCategroiesComponent } from './Pages/Components/show-all-categories/show-all-categories.component';
import { MyActivitiesComponent } from './Pages/Components/my-activities/my-activities.component';
import { DashboardComponent } from './Pages/dashboard/dashboard.component';
import { FavoriteComponent } from './Pages/Components/favorite/favorite.component';
import { CompletedComponent } from './Pages/Components/completed/completed.component';

export const routes: Routes = [
    {path:'',component:HomeComponent},
    {path:'login',component:LoginComponent},
    {path:'signup',component:SignupComponent},
    {path:'dashboard',component:DashboardComponent,children:[
        {path:'activities',component:ShowAllCategroiesComponent},
        {path:'myactivity',component:MyActivitiesComponent},
        {path:'favorite',component:FavoriteComponent},
        {path:'completed',component:CompletedComponent},
    ]}
];
