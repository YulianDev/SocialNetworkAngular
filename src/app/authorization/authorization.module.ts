import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { AuthorizationLayoutComponent } from './layout/authorization-layout/authorization-layout.component';
import {AuthorizationRoutingModule} from "./authorization-routing.module";
import { RegistrationComponent } from './components/registration/registration.component';
import { LoginLayoutComponent } from './layout/login-layout/login-layout.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    LoginComponent,
    AuthorizationLayoutComponent,
    RegistrationComponent,
    LoginLayoutComponent,
  ],
  imports: [
    CommonModule,
    AuthorizationRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class AuthorizationModule { }
