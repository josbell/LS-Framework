import { ProfileComponent } from './profile/profile.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { TeamsComponent } from './teams/teams.component';
import { SubscriptionComponent } from './subscription/subscription.component';
import { AuthGuardService } from './app-services/auth-guard.service';
import { SignInComponent } from './../ls/users/sign-in/sign-in.component';
import { MyAccountComponent } from './my-account/my-account.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ScheduleComponent } from './schedule/schedule.component';
import { LessonsComponent } from './lessons/lessons.component';
import { ServicesComponent } from './services/services.component';
import { RegisterComponent } from 'src/ls/users/register/register.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'schedule', component: ScheduleComponent },
  { path: 'lessons', component: LessonsComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'signin', component: SignInComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'myaccount', component: MyAccountComponent, canActivate: [AuthGuardService],
    children: [
      { path: '', canActivateChild: [AuthGuardService],
      children: [
        { path: 'profile', component: ProfileComponent},
        { path: 'subscription', component: SubscriptionComponent},
        { path: 'teams', component: TeamsComponent},
        { path: 'notifications', component: NotificationsComponent}
      ]}
    ]
  },
  { path: '', component: DashboardComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
