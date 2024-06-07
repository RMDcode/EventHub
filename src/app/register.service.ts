import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import { StudentInfo } from './student-info';


@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  
  constructor(private http:HttpClient) { }
  
  signup(data:any):Observable<any>
  { 
    //console.log(data);
    return this.http.post('http://localhost:4000/event-register/EventRegister',data);
  }

  signup1(data:any):Observable<any>
  { 
    //console.log(data);
    return this.http.post('http://localhost:4000/special-event-register/SpecialRegister',data);
  }
}
