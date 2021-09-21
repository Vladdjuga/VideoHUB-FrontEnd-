import { Component, OnInit } from '@angular/core';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { User } from 'src/app/models/user';
import { Router } from '@angular/router';
import { VideoService } from 'src/app/services/video.service';
import { Video } from 'src/app/models/video';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profile=new User();
  videos: Array<Video> = new Array<Video>();
  constructor(private ngxService: NgxUiLoaderService, private router:Router,private service:VideoService) { 
    const token = localStorage.getItem("token")
    if (token != null) {
      const jwtData = token.split('.')[1];
      const decodedJwtJsonData = window.atob(jwtData);
      const decodedJwtData = JSON.parse(decodedJwtJsonData);
      if (decodedJwtData.sub != null) {
        console.log(decodedJwtData);
        this.profile.name=decodedJwtData.name;
        this.profile.icon=decodedJwtData.icon;
        this.profile.birth=decodedJwtData.birth;
        this.profile.gender=decodedJwtData.gender;
        this.profile.phone=decodedJwtData.phone;
        this.profile.roles=JSON.parse(decodedJwtData.roles);
      }
    }
  }

  Edit(){    
    this.router.navigate(["/profile-edit"]);
  }

  ngOnInit() {
    this.ngxService.start();
    this.service.getUserVideos(this.profile.name).subscribe((res: Array<Video>) => {
      console.log(res);
      this.videos = res;
    })
    this.ngxService.stop();
  }
  normalTime(date:Date){
    var options = { weekday: "long", year: "numeric", month: "long", day: "numeric" } as const;
    return new Date(date).toLocaleDateString("ru-RU",options);
  }
  videoRef(id: number) {
    this.router.navigate([`/video/${id}`]);
  }
}
