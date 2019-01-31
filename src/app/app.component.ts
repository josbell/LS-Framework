import { FrameworkConfigSettings } from '../ls/model';
import { FrameworkConfigService } from './../ls/framework-config.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'DanceStudio';

  constructor(configService: FrameworkConfigService) {
    const frameworkConfig: FrameworkConfigSettings = {
      title: this.title,
      menuItems: [
        {text: 'Schedule', route: '/schedule', icon: 'group'},
        {text: 'Lessons', route: '/lessons', icon: 'person'},
          // submenu: [{text: 'Item4', route: '.', icon: 'recent_actors'}, {text: 'Item5', route: '.', icon: 'star_rate'}]},
        {text: 'Services', route: '/services', icon: 'feedback'}
      ],
      socialIcons: [
        {imageFile: 'assets/social_media_icons/facebook.svg', alt: 'Facebook', link: 'http://www.facebook.com'},
        {imageFile: 'assets/social_media_icons/instagram.svg', alt: 'Instagram', link: 'http://www.instagram.com'},
        {imageFile: 'assets/social_media_icons/youtube.svg', alt: 'Youtube', link: 'http://www.youtube.com'}
      ]
    };
    configService.configure(frameworkConfig);
  }
}
