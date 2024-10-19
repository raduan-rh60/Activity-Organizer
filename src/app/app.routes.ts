import { Routes } from '@angular/router';
import { HomeComponent } from './Pages/home/home.component';
import { LoginComponent } from './Pages/login/login.component';
import { SignupComponent } from './Pages/signup/signup.component';
import { NavbarComponent } from './Pages/Components/navbar/navbar.component';
import { ShowAllCategroiesComponent } from './Pages/Components/show-all-categories/show-all-categories.component';
import { MyActivitiesComponent } from './Pages/Components/my-activities/my-activities.component';
import { AcitivityDetailsComponent } from './Pages/Components/acitivity-details/acitivity-details.component';
import { DashboardComponent } from './Pages/dashboard/dashboard.component';

export const routes: Routes = [
    {path:'',component:HomeComponent},
    {path:'login',component:LoginComponent},
    {path:'signup',component:SignupComponent},
    {path:'dashboard',component:DashboardComponent,children:[
        {path:'activities',component:ShowAllCategroiesComponent},
        {path:'myactivity',component:MyActivitiesComponent},
        {path:'activity-details',component:AcitivityDetailsComponent}
    ]}
];
