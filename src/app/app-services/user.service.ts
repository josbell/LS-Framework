import { UserInfo } from './../../ls/model';
import { Injectable } from '@angular/core';
import { UserApi } from 'src/ls/users/user-api';
import { of } from 'rxjs';
import { delay } from 'rxjs/internal/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService implements UserApi {
  isLoggedIn = false;
  constructor() { }

  signIn(username: string, password: string, rememberMe: boolean) {
    console.log(username, password, rememberMe);
    this.isLoggedIn = true;
    return of(true).pipe(delay(2000));
  }

  signOut() {
    console.log('signed out');
    this.isLoggedIn = false;
    return of(true).pipe(delay(2000));
  }

  changePassword(username: string, oldPassword: string, newPassword: string) {
    console.log(username, oldPassword, newPassword);
    return of(true).pipe(delay(2000));
  }

  register(userInfo: UserInfo) {
    this.isLoggedIn = true;
    console.log('registering', userInfo);
    return of(true).pipe(delay(2000));
  }

}
