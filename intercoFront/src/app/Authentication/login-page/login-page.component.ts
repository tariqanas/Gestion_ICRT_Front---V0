import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/Services/Authentication/auth.service';
import { Observable } from 'rxjs';
 

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  canLogin = true ; 

  username: string;
  password : string;
  errorMessage = 'Invalid Credentials';
  successMessage: string;
  invalidCredantials = false;
  loginSuccess = false;
 

  constructor (private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthService) { }

  ngOnInit() {
   
  }

 validateData(formData) {
  const regexp = new RegExp(/^\S*$/);
  this.canLogin = regexp.test(formData.username);
}

handleLogin() {
  this.authenticationService.authenticationService(this.username, this.password).subscribe((result)=> {
    this.invalidCredantials = false;
    this.loginSuccess = true;
    this.successMessage = 'Login Successful.';
    this.router.navigate (['/main-menu']);
  },() => {
    this.invalidCredantials = true;
  })  
}

}
