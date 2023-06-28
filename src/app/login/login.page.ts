import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,Validators } from '@angular/forms';
import { LocalService } from '../localstorage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginForm:FormGroup;
  loginuser:any;
  loginData:any;

  constructor(
    private storage:LocalService,
    private route:Router
  ) { 

    this.loginForm=new FormGroup({

      email: new FormControl(""),
      password:new FormControl("")

    });

   

  }

  OnSubmit (value:any){
    console.log(value);
    this.loginuser= JSON.parse(this.storage.getData('Users') as string);
    console.log(this.loginuser);
    if (this.loginuser !=null){
      let index=this.loginuser.findIndex((element:any)=> element.email == value.email && element.password == value.password)
      console.log(index); 
      if (index > -1){
        this.route.navigate(['/']);
        this.storage.saveData('LoginUser', JSON.stringify(value)); 
      } else{
        console.log("data not Found!");
        
      }
    }
    
    

  }

  ngOnInit() {
  }

}
