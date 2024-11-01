import { Component, Injectable, OnInit } from '@angular/core';
import {
  Router,
  RouterLink,
  RouterOutlet,
} from '@angular/router';
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

  today = new Date().toISOString().split('T')[0];

  constructor(
    private appservice: AppService,
    private formbuilder: FormBuilder,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.formValue = this.formbuilder.group({
      activityName: [''],
      activityCategory: [''],
      modifiedDate: [this.today],
      activityShortDescription: [''],
      submitDate: [''],
      submitTime: [''],
      complete: [false],
      favorite: [false]
    });
    this.getActivityInfo();
  }
  getActivityInfo() {
    console.log(this.today)
    this.appservice.dateFilter().subscribe((res: any) => {
      this.activityData = res;
    });
  }

  addActivity() {
    this.appservice.postActivity(this.formValue.value).subscribe(
      (res) => {
        this.getActivityInfo();
        alert('added Successful');
       location.reload();
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
    this.formValue.controls['modifiedDate'].setValue(this.today);
    this.formValue.controls['activityShortDescription'].setValue(row.activityShortDescription);
    this.formValue.controls['submitDate'].setValue(row.submitDate);
    this.formValue.controls['submitTime'].setValue(row.submitTime);
    this.formValue.controls['favorite'].setValue(row.favorite);
    this.formValue.controls['complete'].setValue(row.complete);
    
   }

   activityUpdate(){
    this.appservice.putActivity( this.showmodel.id,this.formValue.value).subscribe((res)=>{
      alert('update successfully');
      this.formValue.reset();
      this.getActivityInfo();
      location.reload();
    })
}

deleteActivity(id:string){
  this.appservice.deleteActivities(id).subscribe((res)=>{
    alert("delete Successful.");
    this.getActivityInfo();
  })
}
}
