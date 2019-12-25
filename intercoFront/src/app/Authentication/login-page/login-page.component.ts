import { Component, OnInit } from '@angular/core';
import { user } from 'src/app/Models/user';
import { AuthServiceService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  canLogin = true ; 
  constructor(private authService : AuthServiceService) { }

  ngOnInit() {
   
  }

  onClickSubmit(formData) {
    let utilisateur : user = new user();
    utilisateur.setuserName(formData.username);
    utilisateur.setPassword(formData.password);

    this.authService.getAuthenticated(utilisateur).subscribe( user => {
      console.log("Sent");
    })

 }

 validateData(formData) {
  const regexp = new RegExp(/^\S*$/);
  this.canLogin = regexp.test(formData.username);
}

}
