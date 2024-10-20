import { Component, Injectable, OnInit } from '@angular/core';
import { ActivatedRoute, Params, RouterLink, RouterOutlet } from '@angular/router';
import { SideNotificationComponent } from '../side-notification/side-notification.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppService } from '../../../app-service';
import { Observable } from 'rxjs';
import { AcitivityDetailsComponent } from '../acitivity-details/acitivity-details.component';
import { Router } from 'express';

@Injectable({
  providedIn: 'root',
})
@Component({
  selector: 'app-show-all-categroies',
  standalone: true,
  imports: [
    RouterLink,
    RouterOutlet,
    SideNotificationComponent,
    FormsModule,
    ReactiveFormsModule,
  ],
  templateUrl: './show-all-categories.component.html',
  styleUrl: './show-all-categories.component.css',
})
export class ShowAllCategroiesComponent implements OnInit {
  activityData: any[] = [];
  public id:string ="";

  constructor(private appservice: AppService) {}

  ngOnInit(): void {
    this.getActivityInfo();
   
  }
  getActivityInfo() {
    this.appservice.getactivityLocation().subscribe((res: any) => {
      this.activityData = res;
    });
  }

}
