import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { LocalService } from '../localstorage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.page.html',
  styleUrls: ['./add.page.scss'],
})
export class AddPage implements OnInit {

  addForm: FormGroup;
  add_Ques: any;
  loginuser:any;

  Questionadd: any = [];

  constructor(
    private storage: LocalService,
    private route:Router
  ) {

    this.addForm = new FormGroup({

      question: new FormControl(""),
      answer: new FormControl(""),
      categories: new FormControl("")


    });

    this.loginuser= JSON.parse(this.storage.getData('LoginUser') as string);
    console.log(this.loginuser);
  }

  OnSubmit(value: any) {

    value.email = this.loginuser.email;
    this.add_Ques = JSON.parse(this.storage.getData('Question') as string);
    console.log(this.add_Ques);
    if (this.add_Ques != null) {
      this.add_Ques.push(value); 
      this.storage.saveData('Question', JSON.stringify(this.add_Ques)); 
      this.addForm.reset();
      this.route.navigate(['/'])
      
    } else {
      this.add_Ques = [value];
      this.storage.saveData('Question', JSON.stringify(this.add_Ques)); 
      this.addForm.reset();
    }
  }
  
  




  ngOnInit() {
  }

}
