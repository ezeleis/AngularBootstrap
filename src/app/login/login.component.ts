import { Component } from '@angular/core';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private loginService:LoginService){}
  saveEmail() {
    const emailInput = document.getElementById('email') as HTMLInputElement;
    this.loginService.setEmail(emailInput.value);
  }
}
