import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClassificationsComponent } from './classifications/classifications.component';
import { SharedModule } from '../shared/shared.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from '../shared/footer/footer.component';
import { HeaderComponent } from '../shared/header/header.component';
import { AppRoutingModule } from '../app-routing.module';
import { SliderComponent } from '../shared/slider/slider.component';



@NgModule({
  declarations: [
    ClassificationsComponent,
    HomeComponent,

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
  exports:[
   HomeComponent,
   SliderComponent
  ]
})
export class ContentModule { }
