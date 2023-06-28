import { Component } from '@angular/core';
import { LocalService } from './localstorage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  loginuser:any;
  constructor(
    private storage:LocalService,
    private route :Router
  ) {

    this.loginuser= JSON.parse(this.storage.getData('LoginUser') as string);
    console.log(this.loginuser);
    if(this.loginuser !=undefined){
      this.route.navigate(['/home']);
        }else{
          this.route.navigate(['/login']);
       }

    }

  }

