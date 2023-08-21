import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionComponent } from './question/question.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';
import { SharedModule } from '../shared/shared.module';
import { HeaderComponent } from '../shared/header/header.component';
import { ResaultComponent } from './resault/resault.component';



@NgModule({
  declarations: [
    QuestionComponent,
    ResaultComponent,

  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    AppRoutingModule,
    SharedModule
  ],
  exports:[
    HeaderComponent
  ]
})
export class QuestionsModule { }
