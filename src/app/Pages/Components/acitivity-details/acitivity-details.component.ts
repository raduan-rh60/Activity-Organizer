import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppService } from '../../../app-service';
import { ShowAllCategroiesComponent } from '../show-all-categories/show-all-categories.component';

@Component({
  selector: 'app-acitivity-details',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './acitivity-details.component.html',
  styleUrl: './acitivity-details.component.css',
})
export class AcitivityDetailsComponent {
  activityData: any[] = [];
  id:String="";

  constructor(private appservice: AppService,private showallcategories:ShowAllCategroiesComponent) {
    // this.id=this.showallcategories.sendId().subscribe((id:any)=>{
    //   this.id=id;
    // });
    console.log(this.id);
  }

  ngOnInit(): void {
    this.getActivityInfo();
    console.log(this.showallcategories.sendId());
  }

  getActivityInfo() {
    this.appservice.getActivityByID(this.showallcategories.id).subscribe((res: any) => {
      
      this.activityData = res;
    });
  }
}
