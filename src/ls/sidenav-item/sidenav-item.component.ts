import { MenuItem } from './../model';
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'ls-sidenav-item',
  templateUrl: './sidenav-item.component.html',
  styleUrls: ['./sidenav-item.component.scss'],
  animations: [
    trigger('indicatorRotate', [
      state('collapsed', style({transform: 'rotate(0deg)'})),
      state('expanded', style({transform: 'rotate(180deg)'})),
      transition('expanded <=> collapsed',
        animate('225ms cubic-bezier(0.4,0.0,0.2,1)')
      ),
    ])
  ]
})
export class SidenavItemComponent implements OnInit {
  expanded: boolean;
  @Input() item: MenuItem;
  @Input() depth: number;

  constructor(public router: Router) { }

  ngOnInit() {
  }

  onItemSelected(item: MenuItem) {
    if (!item.submenu || !item.submenu.length) {
      this.router.navigate([item.route]);
    }
    if (item.submenu && item.submenu.length) {
      this.expanded = !this.expanded;
    }
  }

}
