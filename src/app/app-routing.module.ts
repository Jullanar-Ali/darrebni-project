import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './content/home/home.component';
import { LoginComponent } from './validation/login/login.component';
import { RegisterComponent } from './validation/register/register.component';
import { ClassificationsComponent } from './content/classifications/classifications.component';
import { CoursesComponent } from './content/courses/courses.component';
import { CourseComponent } from './content/course/course.component';
import { OptionOfClassificationComponent } from './content/option-of-classification/option-of-classification.component';
import { QuestionComponent } from './questions/question/question.component';

const routes: Routes = [
  {path:"", component:HomeComponent},
  {path:"home", component:HomeComponent},
  {path:"login", component:LoginComponent},
  {path:"register", component:RegisterComponent},
  {path:"classification", component:ClassificationsComponent},
  {path:"question", component:QuestionComponent},
  {path:"option", component: OptionOfClassificationComponent},
  {path:"courses", component:CoursesComponent},
  {path:"course", component:CourseComponent},




// {path:"**", redirectTo:'all', pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
