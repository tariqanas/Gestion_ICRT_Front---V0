import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { employee } from 'src/app/Models/employee';
import { HttpClient } from '@angular/common/http';
import { UtilMethods } from '../../Utils/UtilMethods';

@Injectable({
  providedIn: 'root'
})
export class MeteoServiceService {

   baseUrl  ="http://localhost:8080";
  constructor(private http :HttpClient,private utils:UtilMethods) { }


  getStaffInformations() : Observable<employee> {
    return this.http.get<employee>(`${this.baseUrl}/meteo/employees`,
    { headers: { authorization: this.utils.createBasicAuthToken(localStorage.getItem("username"), localStorage.getItem("password")) } });
  }

  
}
