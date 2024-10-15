import { Routes } from '@angular/router';
import { HomeComponent } from './Pages/home/home.component';
import { LoginComponent } from './Pages/login/login.component';
import { SignupComponent } from './Pages/signup/signup.component';
import { NavbarComponent } from './Pages/Components/navbar/navbar.component';
import { ShowAllCategroiesComponent } from './Pages/Components/show-all-categroies/show-all-categroies.component';
import { MyActivitiesComponent } from './Pages/Components/my-activities/my-activities.component';

export const routes: Routes = [
    {path:'',component:HomeComponent},
    {path:'login',component:LoginComponent},
    {path:'signup',component:SignupComponent},
    {path:'dashboard',component:NavbarComponent,children:[
        {path:'activities',component:ShowAllCategroiesComponent},
        {path:'myactivity',component:MyActivitiesComponent}
    ]}
];
