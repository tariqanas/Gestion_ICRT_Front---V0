import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable, BehaviorSubject } from 'rxjs';
import { user } from 'src/app/Models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
public USER_NAME_SESSION_ATTRIBUTE_NAME = 'authenticatedUser';

public username: String;
public password: String;
public logged : boolean ;

  constructor(private http : HttpClient) {
   }

authenticationService(username: String, password: String) {
  return this.http.get(`http://localhost:8080/auth`,
    { headers: { authorization: this.createBasicAuthToken(username, password) } }).pipe(map((res) => {    
      this.username = username;
      this.password = password;
      this.registerSuccessfulLogin(username, password);
    }));
}

createBasicAuthToken(username: String, password: String) {
  return 'Basic ' + window.btoa(username + ":" + password)
}

registerSuccessfulLogin(username, password) {
  localStorage.setItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME, username)
  localStorage.setItem("logged","true");
  
}

logout() {
  localStorage.removeItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME);
  localStorage.removeItem("logged");
  this.username = null;
  this.password = null;
}

isUserLoggedIn() {
  let user = sessionStorage.getItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME)
  if (user === null) return false
  return true
}

getLoggedInUserName() {
  let user = sessionStorage.getItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME)
  if (user === null) return ''
  return user
}
}
