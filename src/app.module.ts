import { NgModule } from '@angular/core';
import { NgModel } from '@angular/forms';

import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app/app.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// import { AppComponent } from './app.component';

@NgModule({
  // declarations: [AppComponent, RandomComponent],
  declarations: [],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AppComponent,
  ],
  providers: [],
})
export class AppModule {}
