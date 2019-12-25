import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse  } from '@angular/common/http';
import { user } from '../Models/user';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  url : string = "http://localhost:8080"; 

  /*
  optionRequete = {
    headers: new HttpHeaders({ 
      'Access-Control-Allow-Origin':'*'
    }).set('Content-Type', 'application/json; charset=utf-8')
  }*/

  constructor(private http : HttpClient) { }

  getAuthenticated(utilisateur : user)  {
    return this.http.post(`${this.url}/auth`,utilisateur).pipe(
      catchError(this.handleError)
    );
  }
  
  handleError(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
  }
}
