import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BaseLayoutComponent} from '../test-firebase/profile/layout/base-layout/base-layout.component';
import {EditProfileComponent} from '../test-firebase/profile/components/edit-profile/edit-profile.component';
import {WallComponent} from '../test-firebase/profile/components/wall/wall.component';
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from '@angular/common/http';
import {AuthorizationModule} from "./authorization/authorization.module";
import { ProfilesModule } from './profile/profiles.module';
import {AuthorizationRoutingModule} from "./authorization/authorization-routing.module";
import { NotfoundComponent } from './notfound/notfound.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    BaseLayoutComponent,
    EditProfileComponent,
    WallComponent,
    NotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthorizationModule,
    AuthorizationRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    ProfilesModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
