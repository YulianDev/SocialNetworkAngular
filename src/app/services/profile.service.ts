import { Injectable } from '@angular/core';
import {Base} from "../../test-database/base";
import {Profile, User} from "../models/profile.model";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Users} from "../../test-database/base.module";

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(/*private httpClient:HttpClient*/) { }
  /*getUsers() : Observable<User[]> {
    return this.httpClient.get('assets/users.json').pipe(map((data:any)=>{
      let usersList = data["userList"];
      return usersList.map(function(user: any): User {
        return new User(user.userName, user.userAge);
      });
    }));
  }*/

  private base:Base = new Base()

  getUsers(id: number):Profile {
    return this.base.getUser(id);
  }
}
