import { UserService } from './app-services/user.service';
import { UserApi } from 'src/ls/users/user-api';
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
import { DashboardComponent } from './dashboard/dashboard.component';
import { MyAccountComponent } from './my-account/my-account.component';
import { AuthenticatedComponent } from './authenticated/authenticated.component';

@NgModule({
  declarations: [
    AppComponent,
    ScheduleComponent,
    LessonsComponent,
    ServicesComponent,
    DashboardComponent,
    MyAccountComponent,
    AuthenticatedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    BrowserAnimationsModule,
    LsModule
  ],
  providers: [{provide: UserApi, useExisting: UserService}],
  bootstrap: [AppComponent]
})
export class AppModule { }
