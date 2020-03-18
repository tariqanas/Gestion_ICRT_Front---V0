import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable, BehaviorSubject } from 'rxjs';
import { user } from 'src/app/Models/user';
import { UtilMethods } from '../../Utils/UtilMethods';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  


public username: String;
public password: String;
public logged : boolean ;

  constructor(private http : HttpClient , private _utils: UtilMethods) {
   }

authenticationService(username: String, password: String) {
  return this.http.get(`http://localhost:8080/auth`,
    { headers: { authorization: this._utils.createBasicAuthToken(username, password) } }).pipe(map((res) => {    
      this.username = username;
      this.password = password;
      this._utils.registerSuccessfulLogin(username, password);
    }));
}

logout() {
  localStorage.removeItem(this._utils.USER_NAME_SESSION_ATTRIBUTE_NAME);
  localStorage.removeItem("logged");
  localStorage.clear();
  this.username = null;
  this.password = null;
}

isUserLoggedIn() {
  let user = sessionStorage.getItem(this._utils.USER_NAME_SESSION_ATTRIBUTE_NAME)
  if (user === null) return false
  return true
}

getLoggedInUserName() {
  let user = sessionStorage.getItem(this._utils.USER_NAME_SESSION_ATTRIBUTE_NAME)
  if (user === null) return ''
  return user
}
}
