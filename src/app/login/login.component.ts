import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { NgModule } from '@angular/core';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  title = 'hr-system-app';

  message: string | any;


  constructor(public authService: AuthService, public router: Router) {
    this.setMessage();
  }

  login(userlogin: any) {
    const email = userlogin.value.email;
    const password = userlogin.value.password;
    this.authService.login();
    this.setMessage();

    this.authService.isAuthenticated().then(isAuthenticated => {
      if (isAuthenticated) {
        let redirectUrl = this.authService.redirectUrl ? this.router.parseUrl(this.authService.redirectUrl) : '/dashboard';
        this.router.navigateByUrl(redirectUrl);
      }
    })
  }

  logout() {
    this.authService.logout();
    this.setMessage();
  }

  setMessage() {
    this.message = 'logged ';

    this.authService.isAuthenticated().then((isAuthenticated: Boolean | any) => {
      if (isAuthenticated) {
        this.message += 'in';
      } else {
        this.message += 'out';
      }
    })
  }
}
