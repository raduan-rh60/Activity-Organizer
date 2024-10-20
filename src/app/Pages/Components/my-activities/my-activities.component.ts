import { Component, OnInit } from '@angular/core';
import { MyActivityModel } from './my-activities.mode';
import { AppService } from '../../../app-service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-my-activities',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './my-activities.component.html',
  styleUrl: './my-activities.component.css'
})
export class MyActivitiesComponent implements OnInit{
  myactivities:MyActivityModel[]=[];

  delete:boolean=false;

  constructor(private appservice: AppService) {}
  ngOnInit(): void {
    this.getAllActivityInfo();
  }

  getAllActivityInfo() {
    this.appservice.getallactivityLocation().subscribe((res: MyActivityModel[]) => {
      this.myactivities = res;
    
    });
}

deleteActivities(id:string){
  console.log(id);
  this.appservice.deleteActivities(id).subscribe(res =>{
    this.delete=true;

    this.getAllActivityInfo();
  })
}
}
