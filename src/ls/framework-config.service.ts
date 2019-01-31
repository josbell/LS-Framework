import { IconFiles, MenuItem, FrameworkConfigSettings } from './model';
import { LsModule } from './ls.module';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FrameworkConfigService {

  title: string;
  socialIcons: IconFiles[];
  menuItems: MenuItem[];

  configure(settings: FrameworkConfigSettings) {
    Object.assign(this, settings);
  }
}
