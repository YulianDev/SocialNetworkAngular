import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfilesRoutingModule } from './profiles-routing.module';
import { WallComponent } from './components/wall/wall.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { InformationComponent } from './components/information/information.component';


@NgModule({
  declarations: [
    WallComponent,
    HomepageComponent,
    InformationComponent
  ],
  imports: [
    CommonModule,
    ProfilesRoutingModule,
  ]
})
export class ProfilesModule { }
