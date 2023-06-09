import { Component } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hr-system-app';

  constructor(private authService: AuthService) {}

  get isLoggedIn() {
    return this.authService.loggedIn;
  }
}
