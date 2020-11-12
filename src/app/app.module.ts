import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {DefaultModule} from './layouts/default/default.module';

import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { ProfilepicComponent } from './modules/profilepic/profilepic.component';
import { LandingComponent } from './modules/landing/landing.component';
import { PaymentComponent } from './modules/payment/payment.component';
import { CourseComponent } from './modules/course/course.component';
import { CoursepageComponent } from './modules/coursepage/coursepage.component';


@NgModule({
  declarations: [
    AppComponent,
    ProfilepicComponent,
    LandingComponent,
    PaymentComponent,
    CourseComponent,
    CoursepageComponent,
  ], 
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    DefaultModule,
    MatButtonModule,
    MatDialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
  //entryComponents: [ProfilepicComponent]
})
export class AppModule { }
