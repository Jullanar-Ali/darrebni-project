import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './content/home/home.component';
import { LoginComponent } from './validation/login/login.component';
import { RegisterComponent } from './validation/register/register.component';
import { ClassificationsComponent } from './content/classifications/classifications.component';

const routes: Routes = [
  {path:"", component:HomeComponent},
  {path:"home", component:HomeComponent},
  {path:"login", component:LoginComponent},
  {path:"register", component:RegisterComponent},
  {path:"classification", component:  ClassificationsComponent},

// {path:"**", redirectTo:'all', pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
