import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LsModule } from './../ls/ls.module';
import { ScheduleComponent } from './schedule/schedule.component';
import { LessonsComponent } from './lessons/lessons.component';
import { ServicesComponent } from './services/services.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    ScheduleComponent,
    LessonsComponent,
    ServicesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    BrowserAnimationsModule,
    LsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
