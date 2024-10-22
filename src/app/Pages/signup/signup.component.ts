import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AppService } from '../../app-service';
@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [RouterLink, FormsModule, ReactiveFormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  signupForm: FormGroup;

  constructor(private fb: FormBuilder, private appservice: AppService, private router: Router) {
    this.signupForm = this.fb.group({
      email: [''],
      userName: [''],
      password: [''],
    });
  }

  ngOnInit(): void { }

  onSubmit() {
    console.log(this.signupForm.value);
    this.appservice.postUser(this.signupForm.value).subscribe((res: any) => {

      this.router.navigate(['login']);
      
    });
  }

}
