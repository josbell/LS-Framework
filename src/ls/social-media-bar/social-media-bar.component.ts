import { FrameworkConfigService } from '../framework-config.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ls-social-media-bar',
  templateUrl: './social-media-bar.component.html',
  styleUrls: ['./social-media-bar.component.scss']
})
export class SocialMediaBarComponent implements OnInit {

  constructor(public configService: FrameworkConfigService) {}

  ngOnInit() {
  }

}
