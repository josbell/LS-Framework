
import { Router, ActivatedRoute } from '@angular/router';
import { AppDataService } from './../app-services/app-data.service';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/internal/operators';

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.scss']
})
export class SubscriptionComponent implements OnInit {
  subscription;
  operation$;

  constructor(private dataService: AppDataService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.operation$ = this.route.params.pipe(map(p => p.operation));
    this.dataService.getSubscription().subscribe(data => this.subscription = data);
  }

  updateSubscription(data) {
    console.log(data);
  }

}
