import { profileFormFields as fieldsConfig} from './../forms-config/profile-form-fields';
import { Router, ActivatedRoute } from '@angular/router';
import { AppDataService } from './../app-services/app-data.service';
import { StudentProfile } from './../view-models/student-profile';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/internal/operators';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  profile: StudentProfile;
  operation$: Observable <string>;
  fields = fieldsConfig;

  constructor(
    private dataService: AppDataService,
    private router: Router,
    private route: ActivatedRoute) {}

  ngOnInit() {
    this.operation$ = this.route.params.pipe(map(p => p.operation));
    this.dataService.getProfile().subscribe(profile => this.profile = profile);
  }

  updateProfile = (data) => {
    console.log(data);
    this.router.navigate(['../view'], {relativeTo: this.route});
  }

}
