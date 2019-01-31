import { FrameworkConfigService } from './framework-config.service';
import { MaterialModule } from './material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FrameworkBodyComponent } from './framework-body/framework-body.component';
import { FrameworkHeaderComponent } from './framework-header/framework-header.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FrameworkFooterComponent } from './framework-footer/framework-footer.component';
import { FrameworkContentComponent } from './framework-content/framework-content.component';
import { SocialMediaBarComponent } from './social-media-bar/social-media-bar.component';
import { MenuComponent } from './menu/menu.component';
import { SidenavItemComponent } from './sidenav-item/sidenav-item.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    FrameworkBodyComponent,
    FrameworkHeaderComponent,
    FrameworkFooterComponent,
    FrameworkContentComponent,
    SocialMediaBarComponent,
    MenuComponent,
    SidenavItemComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MaterialModule,
    RouterModule
  ],
  providers: [ FrameworkConfigService],
  exports: [
    FrameworkBodyComponent
  ]
})
export class LsModule { }