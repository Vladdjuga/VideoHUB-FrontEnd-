import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Channel } from 'src/app/models/channel';
import { Video } from 'src/app/models/video';
import { ChannelService } from 'src/app/services/channel.service';
import { VideoService } from 'src/app/services/video.service';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {

  videos = new Array<Video>();
  search = "";
  private subscription: Subscription;
  constructor(private activateRoute: ActivatedRoute, private service: VideoService, private channelservice: ChannelService,private router:Router) {
    this.subscription = activateRoute.params.subscribe(params => this.search = params['search']);
    this.service.getBySearch(this.search).subscribe((res:Array<Video>)=>{
      console.log(res);
      this.videos=res;
    })
  }

  ngOnInit() {
  }
  videoRef(id:number){
    this.router.navigate([`/video/${id}`]);
  }

}
