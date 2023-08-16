import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { SliderComponent } from './slider/slider.component';
import { LoaderComponent } from './loader/loader.component';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [
    HeaderComponent,
    SliderComponent,
    LoaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
  ],
  exports:[
    LoaderComponent,
    HeaderComponent,
    FooterComponent,
    SliderComponent
  ]
})
export class SharedModule { }
