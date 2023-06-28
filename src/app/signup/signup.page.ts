import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,Validators } from '@angular/forms';
import { LocalService } from '../localstorage.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  signUpForm:FormGroup;
  user_Data:any;
  SignData:any=[];
  constructor(
    private storage:LocalService,
    private route:Router
  ) { 
    this.signUpForm=new FormGroup({
      firstName:new FormControl(""),
      lastName:new FormControl(""),
      email: new FormControl("", [Validators.required, Validators.email]),
      password: new FormControl("", [Validators.required,]),

    });
  }

  OnSubmit(value: any) {
    console.log(value);
    this.user_Data = JSON.parse(this.storage.getData('Users') as string);
    if (this.user_Data != null) {
      let index = this.user_Data.findIndex((element: any) => element.email == value.email);
      console.log(index);
      if (index > -1) {
      } else {
        this.user_Data = [...this.user_Data, value];
        this.storage.saveData('Users', JSON.stringify(this.user_Data));
        this.signUpForm.reset();
      }
    } else {
      this.user_Data = [value];
      this.storage.saveData('Users', JSON.stringify(this.user_Data));
      this.signUpForm.reset();
    }
  }
  
  ngOnInit() {
  }

}
