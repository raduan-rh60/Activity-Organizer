import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ShowAllCategroiesModel } from './Pages/Components/show-all-categories/show-all-categories.model';
import { UserModel } from './Pages/login/UserModel';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  private baseUserUrl = 'http://localhost:3000/user';
  private baseActivityUrl = 'http://localhost:3000/activities';
  private baseCompleteActivityUrl = 'http://localhost:3000/activities?complete=true';
  private baseFavoriteActivityUrl = 'http://localhost:3000/activities?favorite=true';

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

  putActivity(id:string,data:ShowAllCategroiesModel){
    return this.httpclient.put<ShowAllCategroiesModel>(this.baseActivityUrl + "/"+id,data)
  }
  
  deleteActivities(id:string){
    return this.httpclient.delete(this.baseActivityUrl+"/"+id);
  }

  // completed activity location

  getCompleteActivityLocation(): Observable<any> {
    return this.httpclient.get(this.baseCompleteActivityUrl);
  }

  // favorite activity location

  getFavoriteActivityLocation(): Observable<any> {
    return this.httpclient.get(this.baseFavoriteActivityUrl);
  }

//  filter data by date
 today = new Date().toISOString().split('T')[0];

 dateFilter(){
  return this.httpclient.get('http://localhost:3000/activities?submitDate='+this.today);
 }

// add user for signup
postUser(data:UserModel){
  return this.httpclient.post<UserModel>(this.baseUserUrl,data);
}


}
