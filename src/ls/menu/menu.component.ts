import { FrameworkConfigService } from './../framework-config.service';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'ls-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor(public configService: FrameworkConfigService) { }

  ngOnInit() {}

}
