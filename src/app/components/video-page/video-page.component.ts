import { Component, OnInit, Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Video } from 'src/app/models/video';
import { VideoService } from 'src/app/services/video.service';
import { CollectionViewer, SelectionChange, DataSource } from '@angular/cdk/collections';
import { FlatTreeControl } from '@angular/cdk/tree';
import { BehaviorSubject, merge, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from 'src/app/models/user';
import { CommentService } from 'src/app/services/comment.service';

@Component({
  selector: 'app-video-page',
  templateUrl: './video-page.component.html',
  styleUrls: ['./video-page.component.css']
})
export class VideoPageComponent implements OnInit {

  id: number | undefined;
  video: Video = new Video();
  likes = 0;
  videos: Array<Video> = new Array<Video>();
  profile = new User();
  isLiked = false;
  private subscription: Subscription;
  constructor(private activateRoute: ActivatedRoute,private service:VideoService, private commentservice:CommentService,private router:Router) {
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
  comments: Array<Comment> = new Array<Comment>();
  ngOnInit(): void {
    this.service.getById(this.id as number).subscribe((res: Video) => {
      this.video = res;
    })

    this.commentservice.getMainComments(this.id as number).subscribe((res: any) => {
      console.log("Video id = " + this.id);
      console.log(res);
      this.comments = res;
    })
    this.service.getLikes(this.id as number).subscribe((res: number) => {
      this.likes = res;
    })
    this.service.isLiked(this.id as number, this.profile.name).subscribe((res: boolean) => {
      this.isLiked = res;
    });
    this.service.getAll().subscribe((res:any)=>{
        this.videos = res
        
    })
  }
  like() {
    if (!this.isLiked) {
      this.service.addLike(this.id as number, this.profile.name).subscribe((res: number) => {
        this.likes = res;
        this.isLiked = true;
      });
    }
    else{
      this.service.removeLike(this.id as number, this.profile.name).subscribe((res: number) => {
        this.likes = res;
        this.isLiked = false;
      });
    }
  }
  videoRef(id:number){
    this.router.navigate([`/video/${id}`]);
    setTimeout(this.reload,1000)
  }
  reload()
  {
    window.location.reload()
  }
  normalTime(date:Date){
    var options = { weekday: "long", year: "numeric", month: "long", day: "numeric" } as const;
    return new Date(date).toLocaleDateString("ru-RU",options);
  }

}
