import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { StudentInfo } from './student-info';


@Injectable()
export class EventService {

  private _eventsUrl = "https://bookstore1-5p5m.vercel.app/event";
  private _specialEventsUrl = "https://bookstore1-5p5m.vercel.app/special";

  constructor(private http: HttpClient) { }

  getEvents() {
    return this.http.get<any>(this._eventsUrl)
  }
  

  getSpecialEvents() {
    return this.http.get<any>(this._specialEventsUrl)
  }

  

}
