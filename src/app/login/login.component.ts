import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, AbstractControl, Validators } from '@angular/forms';

import { AuthService } from '../core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private authService: AuthService,
              private router: Router) {
    this.buildForm();
  }

  ngOnInit(): void { }

  private buildForm(): void {
    this.form = this.formBuilder.group({
      username: ['usario de prueba', [Validators.required]],
      pass: ['12345', [Validators.required]]
    });
  }

  signIn(event: Event): void {
    event.preventDefault();
    if (this.form.valid) {
      this.authService.signIn(this.usernameField.value, this.passField.value);

      const redirectUrl = this.authService.redirectUrl;
      if (redirectUrl && redirectUrl.includes('/purchase-details')) {
        this.router.navigate(['/purchase-details']);
      } else {
        this.router.navigate(['/products']);
      }
    } else {
      this.form.markAllAsTouched();
    }
  }

  get usernameField(): AbstractControl {
    return this.form.get('username');
  }

  get passField(): AbstractControl {
    return this.form.get('pass');
  }
}
