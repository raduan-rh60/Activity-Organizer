import { Component, Injectable } from '@angular/core';
import { ActivatedRoute, Params, Router, RouterOutlet } from '@angular/router';
import { AppService } from '../../../app-service';
import { ShowAllCategroiesComponent } from '../show-all-categories/show-all-categories.component';
import { ShowAllCategroiesModel } from '../show-all-categories/show-all-categories.model';

@Injectable({
  providedIn: 'root',
})
@Component({
  selector: 'app-acitivity-details',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './acitivity-details.component.html',
  styleUrl: './acitivity-details.component.css',
})
export class AcitivityDetailsComponent {
  activity!: ShowAllCategroiesModel;
  id:string="";

  constructor(private appservice: AppService,private showallcategories:ShowAllCategroiesComponent,private activatedRoute:ActivatedRoute,private router:Router) {
    this.activatedRoute.paramMap.subscribe((param:Params)=>{
      this.id= param['get']("id");
      
  });
  this.getActivityInfo();
    
  }

  ngOnInit(): void {
    this.getActivityInfo();
  }

  getActivityInfo() {
    this.appservice.getActivityByID(this.id).subscribe((res: ShowAllCategroiesModel) => {
      this.activity = res;
    });
  }
}
