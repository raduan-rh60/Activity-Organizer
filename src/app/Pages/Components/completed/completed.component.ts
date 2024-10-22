import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ShowAllCategroiesModel } from '../show-all-categories/show-all-categories.model';
import { AppService } from '../../../app-service';

@Component({
  selector: 'app-completed',
  standalone: true,
  imports: [CommonModule, FormsModule,ReactiveFormsModule],
  templateUrl: './completed.component.html',
  styleUrl: './completed.component.css'
})
export class CompletedComponent implements OnInit{
  myactivities:ShowAllCategroiesModel[]=[];

  formValue!: FormGroup;
  showmodel!: ShowAllCategroiesModel;
  delete:boolean=false;
  edit:boolean=false;

  constructor(private appservice: AppService,private formbuilder:FormBuilder) {}
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
    this.getAllActivityInfo();
  }

  getAllActivityInfo() {
    this.appservice.getCompleteActivityLocation().subscribe((res: ShowAllCategroiesModel[]) => {
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


showEditData(row:any){
  this.showmodel=row;
  this.formValue.controls['activityName'].setValue(row.activityName);
  this.formValue.controls['activityCategory'].setValue(row.activityCategory);
  this.formValue.controls['modifiedDate'].setValue(row.modifiedDate);
  this.formValue.controls['activityShortDescription'].setValue(row.activityShortDescription);
  this.formValue.controls['submitDate'].setValue(row.submitDate);
  this.formValue.controls['submitTime'].setValue(row.submitTime);
  this.formValue.controls['favorite'].setValue(row.favorite);
  this.formValue.controls['complete'].setValue(row.complete);
  
 }

 activityUpdate(){
  this.appservice.putActivity( this.showmodel.id,this.formValue.value).subscribe((res)=>{
  this.edit=true;
    this.formValue.reset();
    this.getAllActivityInfo();
    location.reload();
  })
}

}
