import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { Video } from 'src/app/models/video';
import { VideoService } from 'src/app/services/video.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  id: number | undefined;
  likes = 0;
  profile = new User();
  videos: Array<Video> = new Array<Video>();
  private subscription: Subscription;

  constructor(private activateRoute: ActivatedRoute,private service:VideoService,private router:Router) {
    let customObj = new Video();
    customObj.title = "something";
    customObj.description = "fxfhhfdfhhfddfh"; 
    this.videos.push(customObj);
  
    const token = localStorage.getItem("token")
    if (token != null) {
      const jwtData = token.split('.')[1];
      const decodedJwtJsonData = window.atob(jwtData);
      const decodedJwtData = JSON.parse(decodedJwtJsonData);
      if (decodedJwtData.sub != null) {
        this.profile.name = decodedJwtData.name;
        this.profile.icon = decodedJwtData.icon;
      }
    }

    this.subscription = activateRoute.params.subscribe(params => this.id = params['id']);
   }

  ngOnInit(): void  {
    this.service.getAll().subscribe((res: any) => {
      this.videos = res
      console.log(this.videos[0].title)

    })
  }


  videoRef(id:number){
    this.router.navigate([`/video/${id}`]);
    setTimeout(this.reload,1000)
  }
  reload()
  {
    window.location.reload()
  }


}
