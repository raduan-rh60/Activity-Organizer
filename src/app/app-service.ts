import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ShowAllCategroiesModel } from './Pages/Components/show-all-categories/show-all-categories.model';
import { MyActivityModel } from './Pages/Components/my-activities/my-activities.mode';
import { UserModel } from './Pages/login/UserModel';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  private baseUserUrl = 'http://localhost:3000/user';
  private baseActivityUrl = 'http://localhost:3000/activities';
  private baseAllActivityUrl = 'http://localhost:3000/all-activities';

  constructor(private httpclient: HttpClient) {}

  getuserLocation(): Observable<UserModel> {
    return this.httpclient.get<UserModel>(this.baseUserUrl);
  }

  getactivityLocation(): Observable<any> {
    return this.httpclient.get(this.baseActivityUrl);
  }

  getallactivityLocation(): Observable<MyActivityModel[]> {
    return this.httpclient.get<MyActivityModel[]>(this.baseAllActivityUrl);
  }

  getActivityByID(id:string):Observable<ShowAllCategroiesModel>{
    return this.httpclient.get<ShowAllCategroiesModel>(this.baseActivityUrl+"/"+id);
  }
}
