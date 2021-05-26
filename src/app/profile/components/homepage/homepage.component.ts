import { Component, OnInit } from '@angular/core';
import {Profile} from "../../../models/profile.model";
import {Base} from "../../../../test-database/base";

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }

}
