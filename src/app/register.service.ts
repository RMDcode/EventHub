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
    return this.http.post('https://bookstore1-5p5m.vercel.app/eventuser',data);
  }

  signup1(data:any):Observable<any>
  { 
    //console.log(data);
    return this.http.post('https://bookstore1-5p5m.vercel.app/specialuser',data);
  }
  signup2(data:any):Observable<any>
  { 
    //console.log(data);
    return this.http.post('https://bookstore1-5p5m.vercel.app/contactuser',data);
  }
}
