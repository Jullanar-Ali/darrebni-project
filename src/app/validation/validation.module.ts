import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { MatInputModule } from '@angular/material/input';
import { SharedModule } from "../shared/shared.module";



@NgModule({
    declarations: [
        RegisterComponent,
        LoginComponent,
    ],
    exports: [
        LoginComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        RouterModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule,
        MatInputModule,
        SharedModule
    ]
})
export class ValidationModule { }
