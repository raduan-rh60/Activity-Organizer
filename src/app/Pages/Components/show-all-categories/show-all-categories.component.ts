import { Component, Injectable, OnInit } from '@angular/core';
import {
  RouterLink,
  RouterOutlet,
} from '@angular/router';
import { SideNotificationComponent } from '../side-notification/side-notification.component';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { AppService } from '../../../app-service';
import { ShowAllCategroiesModel } from './show-all-categories.model';

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
    ReactiveFormsModule
  ],
  templateUrl: './show-all-categories.component.html',
  styleUrl: './show-all-categories.component.css',
})
export class ShowAllCategroiesComponent implements OnInit {
  activityData: any[] = [];
  public id: string = '';

  formValue!: FormGroup;
  showmodel!:ShowAllCategroiesModel;

  constructor(
    private appservice: AppService,
    private formbuilder: FormBuilder,
    private apiService:AppService
  ) {}

  ngOnInit(): void {
    this.formValue = this.formbuilder.group({
      activityName: [''],
      activityCategory: [''],
      modifiedDate: [''],
      activityShortDescription: [''],
      events: this.formbuilder.group(
        {
          name: [''],
        shortDescription: [''],
        submitDate: [''],
        submitTime: ['']
        }
      )
    });
    this.getActivityInfo();
  }
  getActivityInfo() {
    this.appservice.getactivityLocation().subscribe((res: any) => {
      this.activityData = res;
    });
  }

  addActivity() {
    this.showmodel.activityName=this.formValue.value.activityName;
    this.showmodel.activityCategory=this.formValue.value.activityCategory;
    this.showmodel.modifiedDate=this.formValue.value.modifiedDate;
    this.showmodel.activityShortDescription=this.formValue.value.activityShortDescription;
    this.showmodel.events[0].name=this.formValue.value.name,
    this.showmodel.events[0].shortDescription=this.formValue.value.shortDescription,
    this.showmodel.events[0].submitDate=this.formValue.value.submitDate,
    this.showmodel.events[0].submitTime=this.formValue.value.submitTime

    this.apiService.postActivity(this.showmodel).subscribe(
      (res) => {
        console.log(res);
        alert('added Successful');

  });
}
}
