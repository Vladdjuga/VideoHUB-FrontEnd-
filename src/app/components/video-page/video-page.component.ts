import { Component, OnInit, Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Video } from 'src/app/models/video';
import { VideoService } from 'src/app/services/video.service';
import {CollectionViewer, SelectionChange, DataSource} from '@angular/cdk/collections';
import {FlatTreeControl} from '@angular/cdk/tree';
import {BehaviorSubject, merge, Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import { CommentService } from 'src/app/services/comment.service';

@Component({
  selector: 'app-video-page',
  templateUrl: './video-page.component.html',
  styleUrls: ['./video-page.component.css']
})
export class VideoPageComponent implements OnInit {

  id: number | undefined;
  video:Video=new Video();
  videos:Array<Video>= new Array<Video>();

  comments: Array<Comment>=new Array<Comment>();

  private subscription: Subscription;
  constructor(private activateRoute: ActivatedRoute,private service:VideoService, private commentservice:CommentService) {    
    this.subscription = activateRoute.params.subscribe(params => this.id = params['id']);   
  }

  ngOnInit(): void {
     this.service.getById(this.id as number).subscribe((res:Video)=>{
       this.video=res;
     })

    this.commentservice.getMainComments(this.id as number).subscribe((res:any)=>{
      console.log("Video id = " + this.id);
      console.log(res);
      this.comments = res;
    })

  }
}
