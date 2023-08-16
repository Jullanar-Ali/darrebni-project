import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { SliderComponent } from './slider/slider.component';
import { LoaderComponent } from './loader/loader.component';



@NgModule({
  declarations: [
    HeaderComponent,
    HomeComponent,
    SliderComponent,
    LoaderComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
  ],
  exports:[
    LoaderComponent
  ]
})
export class SharedModule { }
