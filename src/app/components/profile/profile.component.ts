import { Component, OnInit } from '@angular/core';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { User } from 'src/app/models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profile=new User();
  constructor(private ngxService: NgxUiLoaderService, private router:Router) { 
    const token = localStorage.getItem("token")
    if (token != null) {
      const jwtData = token.split('.')[1];
      const decodedJwtJsonData = window.atob(jwtData);
      const decodedJwtData = JSON.parse(decodedJwtJsonData);
      if (decodedJwtData.sub != null) {
        this.profile.name=decodedJwtData.name;
        this.profile.icon=decodedJwtData.icon;
      }
    }
  }

  Edit(){    
    this.router.navigate(["/profile-edit"]);
  }

  ngOnInit() {
    this.ngxService.start();
    setTimeout(() => {
      this.ngxService.stop();
    }, 1000);
  }

}
