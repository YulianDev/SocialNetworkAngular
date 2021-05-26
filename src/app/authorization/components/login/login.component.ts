import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthorizationService} from "../../../services/authorization.service";
import {Router} from "@angular/router";



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  formData: FormData;
  errorResponse: boolean;

  constructor(private authService: AuthorizationService, private router: Router) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      login: new FormControl(null, [Validators.required, Validators.minLength(5)]),
      password: new FormControl(null, [Validators.required, Validators.minLength(6)])
    })
  }

  submit(): void {
    // create http req and Observer
    this.formData = new FormData();
    this.formData.append('login', this.form.value.login);
    this.formData.append('password', this.form.value.password);
    this.authService.logIn(this.formData) ? this.router.navigate(["/profile"]) : this.errorResponse = true;
  }

}
