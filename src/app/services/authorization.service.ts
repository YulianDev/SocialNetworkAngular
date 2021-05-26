import { Injectable } from '@angular/core';
import {Login} from "../models/authorization.model";
import {Subject} from "rxjs";
import {Base} from "../../test-database/base";
import {Users} from "../../test-database/base.module";

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {

  constructor() { }
  private base = new Base();

  logIn(data:FormData): boolean {
    return this.base.getPermission(data.get("login"), data.get("password"));
  }
  registration(user:Users): boolean {
    return this.base.addUser(user);
  }
}
