import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ValidationModule } from './validation/validation.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContentModule } from "./content/content.module";

@NgModule({
    declarations: [
        AppComponent,
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        ValidationModule,
        BrowserAnimationsModule,
        ContentModule
    ]
})
export class AppModule { }
