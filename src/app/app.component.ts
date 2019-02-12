import { FrameworkConfigSettings } from '../ls/model';
import { FrameworkConfigService } from './../ls/framework-config.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Dance Studio';

  constructor(configService: FrameworkConfigService) {
    const frameworkConfig: FrameworkConfigSettings = {
      title: this.title,
      menuItems: [
        {text: 'Schedule', route: '/schedule', icon: 'group'},
        {text: 'Lessons', route: '/lessons', icon: 'person'},
        {text: 'Services', route: '/services', icon: 'feedback'},
        {text: 'My Account', route: '/myaccount', icon: 'account_circle',
          submenu: [
            { text: 'Profile', route: '/myaccount/profile', icon: 'recent_actors'},
            { text: 'Subscriptions', route: '/myaccount/subscription', icon: 'star_rate'},
            { text: 'Teams', route: '/myaccount/teams', icon: 'group'},
            { text: 'Notifications', route: '/myaccount/notifications', icon: 'notifications'}]
        }
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
