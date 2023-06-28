import { Component } from '@angular/core';
import { LocalService } from '../localstorage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  show_Ques:any;
  data:any;
  constructor(
    private storage:LocalService,
    private route:Router
  ) {}


  ionViewWillEnter (){
    this.Viewall();
    
  }

  Viewall(){
    this.show_Ques = JSON.parse(this.storage.getData('Question') as string);
    console.log(this.show_Ques);
    this.data=this.show_Ques
    console.log('data',this.data);

  }


  Logout() {
    this.storage.removeData('LoginUser');
    this.route.navigate(['/login']);
  }
}
