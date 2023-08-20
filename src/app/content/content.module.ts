import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClassificationsComponent } from './classifications/classifications.component';
import { SharedModule } from '../shared/shared.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from '../app-routing.module';
import { SliderComponent } from '../shared/slider/slider.component';
import { CoursesComponent } from './courses/courses.component';
import { CourseComponent } from './course/course.component';
import { OptionOfClassificationComponent } from './option-of-classification/option-of-classification.component';



@NgModule({
  declarations: [
    ClassificationsComponent,
    HomeComponent,
    CoursesComponent,
    CourseComponent,
    OptionOfClassificationComponent,

  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    RouterModule,
    AppRoutingModule,
  ],
  exports: [
    HomeComponent,
    SliderComponent,
  ]
})
export class ContentModule { }
