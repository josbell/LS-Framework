import { FrameworkConfigService } from './../framework-config.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'ls-framework-body',
  templateUrl: './framework-body.component.html',
  styleUrls: ['./framework-body.component.scss']
})
export class FrameworkBodyComponent implements OnInit {
  constructor(public configService: FrameworkConfigService) { }

  ngOnInit() {}

}
