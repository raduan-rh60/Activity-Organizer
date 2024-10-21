import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
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
  private baseCompletedActivityUrl = 'http://localhost:3000/completed-activities';

  constructor(private httpclient: HttpClient) {}
// user data service==========
  getuserLocation(): Observable<UserModel> {
    return this.httpclient.get<UserModel>(this.baseUserUrl);
  }


  // activities data service ===========
  getactivityLocation(): Observable<any> {
    return this.httpclient.get(this.baseActivityUrl);
  }
  postActivity(data:ShowAllCategroiesModel){
    return this.httpclient.post<ShowAllCategroiesModel>(this.baseActivityUrl,data).pipe(
      map((res: ShowAllCategroiesModel) => {
        return res;
      })
    );
  }

  putUser(id:string,data:ShowAllCategroiesModel){
    return this.httpclient.put<ShowAllCategroiesModel>(this.baseActivityUrl + "/"+id,data)
  }


  //  all activities data service ================
  getallactivityLocation(): Observable<MyActivityModel[]> {
    return this.httpclient.get<MyActivityModel[]>(this.baseAllActivityUrl);
  }

  deleteActivities(id:string){
    return this.httpclient.delete(this.baseAllActivityUrl+"/"+id);
  }

 


  //  acitivity-details service ===============
  getActivityByID(id:string):Observable<ShowAllCategroiesModel>{
    return this.httpclient.get<ShowAllCategroiesModel>(this.baseActivityUrl+"/"+id);
  }
 
  deleteEvents(id:string){
    return this.httpclient.delete(this.baseActivityUrl+"/events/"+id);
  }

}
