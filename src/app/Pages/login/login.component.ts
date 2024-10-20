import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { UserModel } from './UserModel';
import { AppService } from '../../app-service';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink,FormsModule,ReactiveFormsModule,RouterOutlet],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit  {
  loginform!:FormGroup;

  constructor(private appservice: AppService,private formbuilder:FormBuilder,private router:Router) { 

  }
  ngOnInit(): void {
    this.loginform = this.formbuilder.group({
      username: [''],
      password: ['', Validators.required]
    });
    this.loginaccess();
    }
  
  loginaccess():void{
    this.appservice.getuserLocation().subscribe((res:any)=>{
      const user = res.find((a: any) =>{
        return a.username === this.loginform.value.username && a.password === this.loginform.value.password 
       
      })
      if(user){
        this.router.navigate(['dashboard']);
      }else{
        alert('invalid Credentials')
      }
    })
  
  }
}
