import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { RegisterRequest } from 'src/app/models/registerrequest';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-profile-edit',
  templateUrl: './profile-edit.component.html',
  styleUrls: ['./profile-edit.component.css']
})
export class ProfileEditComponent implements OnInit {

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
  signup=new RegisterRequest();
  ngOnInit(): void {
  }
}
