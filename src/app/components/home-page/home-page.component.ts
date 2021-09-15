import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { Subscription } from 'rxjs';
import { Video } from 'src/app/models/video';
import { ChannelService } from 'src/app/services/channel.service';
import { VideoService } from 'src/app/services/video.service';
import { User } from 'src/app/models/user';

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

  constructor(private service: VideoService, private channelservice: ChannelService,private router:Router,private loader:NgxUiLoaderService) {
  }

  ngOnInit() {
    this.loader.start();
    this.service.getAll().subscribe((res:Array<Video>)=>{
      console.log(res);
      this.videos=res;
      this.loader.stop();
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
