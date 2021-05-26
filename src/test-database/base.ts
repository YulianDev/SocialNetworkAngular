import {Users} from "./base.module";
import {Profile} from "../app/models/profile.model";

export class Base {
  private dataBase: Users[] = [{login: "1234567", password: "1234567", firstName: "Natali", age: "15.05.1998"}];

  addUser(user: Users):boolean {
    if (user) {
      user.id = this.dataBase.length > 0 ? this.dataBase.length - 1 : 0;
      this.dataBase.push(user);
      console.log(this.dataBase);
      return true;
    }

    return false;
  }

  getPermission(login: any, password: any): boolean{
    for (let i = 0; i < this.dataBase.length; i++) {
      if(this.dataBase[i].login === login && this.dataBase[i].password === password) {
        return true;
      }
    }
    return false;
  }

  getUser(id:number): Profile {
    if (id < this.dataBase.length) {
      return this.dataBase[id];
    }
    return null;
  }

}
