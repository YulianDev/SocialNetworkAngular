import { Component, OnInit } from '@angular/core';
import {Profile, User} from "../../../models/profile.model";
import {Users} from "../../../../test-database/base.module";
import {ProfileService} from "../../../services/profile.service";


@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.scss']
})
export class InformationComponent implements OnInit {
  /*users: User[];*/
  profile: Profile;

  constructor(private profileService: ProfileService) { }

  ngOnInit(): void {
    /*this.profileService.getUsers().subscribe((data: User[]) => this.users=data);
    console.log(this.users);*/
    this.profile = this.profileService.getUsers(0);
  }




}
