import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Subscription} from "rxjs";
import {ProfileService} from "../../services/profile.service";

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent implements OnInit {
  form: FormGroup;
  subscriber: Subscription = new Subscription();

  constructor(private profileService: ProfileService) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      username: new FormControl(null, [Validators.required, Validators.minLength(4)]),
      firstName: new FormControl(null, [Validators.required, Validators.maxLength(18)]),
      lastName: new FormControl(null, [Validators.required, Validators.maxLength(18)]),
      gender: new FormControl(null, [Validators.required]),
      birthday: new FormControl(null),
      about: new FormControl(null),
      email: new FormControl(null),
      phone: new FormControl(null),
    });
  }


  submit(): void {
    this.profileService.update(this.form.value).subscribe(() => {
      this.form.reset();
    });
    console.log(this.form.value);
  }

}
