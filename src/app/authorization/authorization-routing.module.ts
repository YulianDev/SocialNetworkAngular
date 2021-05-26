import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./components/login/login.component";
import {AuthorizationLayoutComponent} from "./layout/authorization-layout/authorization-layout.component";
import {RegistrationComponent} from "./components/registration/registration.component";
import {LoginLayoutComponent} from "./layout/login-layout/login-layout.component";

const routes: Routes = [
  {
    path: "",
    component: AuthorizationLayoutComponent,
    children: [
      {
        path: "",
        component: LoginLayoutComponent,
        children: [
          {
            path: "login",
            component: LoginComponent
          },
          {
            path: "registration",
            component: RegistrationComponent
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AuthorizationRoutingModule { }
