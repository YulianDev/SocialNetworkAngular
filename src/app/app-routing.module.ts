import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NotfoundComponent} from "./notfound/notfound.component";
import {AppComponent} from "./app.component";
import {AuthorizationRoutingModule} from "./authorization/authorization-routing.module";
import {ProfilesRoutingModule} from "./profile/profiles-routing.module";

const routes: Routes = [
  {
    path: "",
    component: AppComponent
  },
  {
    path: "**",
    component: NotfoundComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    AuthorizationRoutingModule,
    ProfilesRoutingModule,
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
