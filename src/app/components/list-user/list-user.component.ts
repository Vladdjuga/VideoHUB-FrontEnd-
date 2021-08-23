import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {
  options=[{name:"Мой канал",link:"/profile"},
  {name:"Подписки",link:"/subscribtions"},
  {name:"Понравившиеся видео",link:"/liked-videos"},
  {name:"История",link:"/history"},
  {name:"Настройки",link:"/settings"}];

  profile=new User();
  constructor(private router:Router,private ngxService: NgxUiLoaderService) { 
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

  link(link:string){
    this.router.navigate([link]);
  }

  ngOnInit() {
    // this.ngxService.start();
    // setTimeout(() => {
    //   this.ngxService.stop();
    // }, 1000);
  }

}
