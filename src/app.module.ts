import { NgModule } from '@angular/core';
import { NgModel } from '@angular/forms';

import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app/app.component';

import { MaisonComponent } from './app/maison/maison.component';
import { RandomComponent } from './app/random/random.component';
import { ListComponent } from './app/list/list.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// import { AppComponent } from './app.component';

@NgModule({
  // declarations: [AppComponent, RandomComponent],
  declarations: [ListComponent],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AppComponent,
    NgModel,
  ],
  providers: [],
})
export class AppModule {}
