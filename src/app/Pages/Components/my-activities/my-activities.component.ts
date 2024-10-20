import { Component, OnInit } from '@angular/core';
import { MyActivityModel } from './my-activities.mode';
import { AppService } from '../../../app-service';

@Component({
  selector: 'app-my-activities',
  standalone: true,
  imports: [],
  templateUrl: './my-activities.component.html',
  styleUrl: './my-activities.component.css'
})
export class MyActivitiesComponent implements OnInit{
  myactivities:MyActivityModel[]=[];

  constructor(private appservice: AppService) {}
  ngOnInit(): void {
    this.getAllActivityInfo();
  }

  getAllActivityInfo() {
    this.appservice.getallactivityLocation().subscribe((res: MyActivityModel[]) => {
      console.log(res);
      this.myactivities = res;
    });
}
}
