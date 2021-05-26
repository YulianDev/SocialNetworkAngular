import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthorizationService} from "../../../services/authorization.service";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  form: FormGroup;
  errorResponse: boolean;

  constructor(private authService: AuthorizationService) {
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      login: new FormControl(null, [Validators.required, Validators.minLength(4)]),
      password: new FormControl(null, [Validators.required, Validators.minLength(5)]),
      name: new FormControl(null, [Validators.required, Validators.minLength(4)]),
      age: new FormControl(null, [Validators.required]),
    })
  }

  registration(): void {
    // create http req and Observer
    const user = {
      login: this.form.value.login, password: this.form.value.password,
      firstName: this.form.value.name, age: this.form.value.age
    }
    console.log(this.authService.registration(user))
    /*this.authService.registration(user);*/
  }

}
