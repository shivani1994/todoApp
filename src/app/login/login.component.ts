import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(
    private authService: AuthenticationService,
    private fb: FormBuilder,
    private route: Router,
    private actroute: ActivatedRoute,
    ) {
      this.createForm();
      console.log(authService.userData);
  }

  createForm() {
    this.loginForm = this.fb.group({
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  login() {
    this.authService.login(this.loginForm.value.email, this.loginForm.value.password);
    this.authService.isLogin = false;
    this.loginForm.value.email = '';
    this.loginForm.value.password = '';
  }

  ngOnInit() {
  }

}
