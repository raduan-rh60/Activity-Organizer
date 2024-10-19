import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  private baseUserUrl = 'http://localhost:3000/user';
  private baseActivityUrl = 'http://localhost:3000/activities';
  private baseAllActivityUrl = 'http://localhost:3000/all-activities';

  constructor(private httpclient: HttpClient) {}

  getuserLocation(): Observable<any> {
    return this.httpclient.get(this.baseUserUrl);
  }

  getactivityLocation(): Observable<any> {
    return this.httpclient.get(this.baseActivityUrl);
  }

  getallactivityLocation(): Observable<any> {
    return this.httpclient.get(this.baseAllActivityUrl);
  }

  getActivityByID(id:string):Observable<any>{
    return this.httpclient.get(this.baseActivityUrl+"/"+id);
  }
}
