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
import { CommonModule } from '@angular/common';

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
    CommonModule
  ],
  templateUrl: './show-all-categories.component.html',
  styleUrl: './show-all-categories.component.css',
})
export class ShowAllCategroiesComponent implements OnInit {
  activityData: any[] = [];
  public id: string = '';
  saveButton: boolean = false;
  addButton: boolean = true;
  
  formValue!: FormGroup;
  showmodel!: ShowAllCategroiesModel;

  constructor(
    private appservice: AppService,
    private formbuilder: FormBuilder,
    private apiService: AppService
  ) { }

  ngOnInit(): void {
    this.formValue = this.formbuilder.group({
      activityName: [''],
      activityCategory: [''],
      modifiedDate: [''],
      activityShortDescription: [''],
      submitDate: [''],
      submitTime: [''],
      complete: [''],
      favorite: ['']
    });
    this.getActivityInfo();
  }
  getActivityInfo() {
    this.appservice.getactivityLocation().subscribe((res: any) => {
      this.activityData = res;
    });
  }

  addActivity() {
    this.apiService.postActivity(this.formValue.value).subscribe(
      (res) => {
        this.getActivityInfo();
        alert('added Successful');
        console.log(res);
      });
  }
  clickAddActivity() {
    this.formValue.reset();
    this.addButton = true;
    this.saveButton = false;
  }

  showEditData(row:any){
    this.saveButton = true;
    this.addButton = false;
    this.showmodel=row;
    console.log( this.saveButton);
    this.formValue.controls['activityName'].setValue(row.activityName);
    this.formValue.controls['activityCategory'].setValue(row.activityCategory);
    this.formValue.controls['modifiedDate'].setValue(row.modifiedDate);
    this.formValue.controls['activityShortDescription'].setValue(row.activityShortDescription);
    this.formValue.controls['submitDate'].setValue(row.submitDate);
    this.formValue.controls['submitTime'].setValue(row.submitTime);
    this.formValue.controls['favorite'].setValue(row.favorite);
    
   }

   activityUpdate(){
    this.appservice.putUser( this.showmodel.id,this.formValue.value).subscribe((res)=>{
      alert('update successfully');
      this.formValue.reset();
      this.getActivityInfo();
    })
}
}
