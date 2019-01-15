import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AuthService } from '../../sdk/services/core/auth.service';
import { Router } from '@angular/router';
import { SlimLoadingBarService } from 'ng2-slim-loading-bar';
import { ToasterService } from 'angular2-toaster';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  errorMessage;
  isLoading = false;
  isFormSubmitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private slimLoadingBarService: SlimLoadingBarService,
    private toasterService: ToasterService,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.formInitializer();
  }

  formInitializer() {
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      rememberMe: [true]
    });
  }

  login() {
    if (this.loginForm.valid) {
      this.isLoading = true;
      this.isFormSubmitted = true;

      const email = this.loginForm.controls['username'].value;
      const password = this.loginForm.controls['password'].value;

      // this.userApi.login(this.loginForm.value).subscribe(
      //       data => {
      //         localStorage.setItem('token', data.token);
      //         this.router.navigate(['/admin']);
      //         this.isLoading = false;
      //       },
      //       error => {
      //         this.isLoading = false;
      //         console.log(error);
      //       }
      //     );
      if (email == 'admin@mail.com' && password == '123456') {
        console.log('sucess');
        this.authService.saveToken();
        // this.toasterService.pop('success', 'Login Success');
        setTimeout(() => {
          this.isLoading = false;
          this.router.navigate(['/admin']);
        }, 1500);
      } else {
        setTimeout(() => {
          this.isLoading = false;
        }, 1000);
        console.log('failure');
      }
    }
    // this.router.navigate(['/admin']);

    // const rememberMe = this.loginForm.controls['rememberMe'].value;
    /* this.userApi.login(this.loginForm.value).subscribe(
        data => {
          console.log(JSON.stringify(data));
          console.log(data.token.accessToken);
          localStorage.setItem('token', data.token.accessToken);
          localStorage.setItem('data', JSON.stringify(data.token.data));
          this.router.navigate(['/admin']);
          this.isLoading = false;
        },
        error => {
          this.isLoading = false;
          console.log(error);
          this.errorMessage = 'User Authentication Failed.';
          this.toasterService.pop('error', 'Login Failed', this.errorMessage);
        }
      ); */
    // }
  }
}
