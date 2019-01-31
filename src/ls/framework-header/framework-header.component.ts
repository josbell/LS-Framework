import { FrameworkConfigService } from './../framework-config.service';
import { Component, OnInit } from '@angular/core';
import { IconFiles } from '../model';

@Component({
  selector: 'ls-framework-header',
  templateUrl: './framework-header.component.html',
  styleUrls: ['./framework-header.component.scss']
})
export class FrameworkHeaderComponent implements OnInit {
  title: string;
  socialIcons: IconFiles[];

  constructor(configService: FrameworkConfigService) {
    this.title = configService.title;
    this.socialIcons = configService.socialIcons;
  }

  ngOnInit() {
  }

}
