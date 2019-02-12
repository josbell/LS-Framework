import { UserApi } from 'src/ls/users/user-api';
import { FrameworkConfigService } from './../framework-config.service';
import { Component, OnInit } from '@angular/core';
import { IconFiles } from '../model';
import { Router } from '@angular/router';

@Component({
  selector: 'ls-framework-header',
  templateUrl: './framework-header.component.html',
  styleUrls: ['./framework-header.component.scss']
})
export class FrameworkHeaderComponent implements OnInit {

  constructor(public configService: FrameworkConfigService,
    public userApi: UserApi,
    public router: Router) {}

  ngOnInit() {
  }

  signOut() {
    this.userApi.signOut()
      .subscribe(
        data => this.router.navigate(['/']),
        err => console.log(err)
      );
  }

}
