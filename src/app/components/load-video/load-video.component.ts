import { Component, OnInit } from '@angular/core';
import { NotifierService } from 'angular-notifier';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { Channel } from 'src/app/models/channel';
import { User } from 'src/app/models/user';
import { VideoRequest } from 'src/app/models/videorequest';
import { ChannelService } from 'src/app/services/channel.service';
import { VideoService } from 'src/app/services/video.service';

@Component({
  selector: 'app-load-video',
  templateUrl: './load-video.component.html',
  styleUrls: ['./load-video.component.css']
})
export class LoadVideoComponent implements OnInit {

  profile=new User();
  constructor(private ngxService: NgxUiLoaderService,private service:ChannelService,private videoService:VideoService) {
    const token = localStorage.getItem("token")
    if (token != null) {
      const jwtData = token.split('.')[1];
      const decodedJwtJsonData = window.atob(jwtData);
      const decodedJwtData = JSON.parse(decodedJwtJsonData);
      if (decodedJwtData.sub != null) {
        this.profile.id=decodedJwtData.sub.split(",")[0];
        this.profile.name=decodedJwtData.name;
        this.profile.icon=decodedJwtData.icon;
      }
    }
   }

  ngOnInit() {
  }

  url_vid = "";
  url_img = "https://grinvich.com/static/assets/images/media-default-video.png";
  fileInfoVid = "";
  fileInfoImg = "";
  file_vid=new File([],"");
  file_prev=new File([],"");
  video=new VideoRequest();
  formData: FormData = new FormData();

  formatBytes(bytes: number): string {
    this.ngxService.start();
    const UNITS = ['Bytes', 'kB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
    const factor = 1024;
    let index = 0;

    while (bytes >= factor) {
      bytes /= factor;
      index++;
    }

    this.ngxService.stop();
    return `${parseFloat(bytes.toFixed(2))} ${UNITS[index]}`;
  }
  target(event: Event): HTMLInputElement {
    if (!(event.target instanceof HTMLInputElement)) {
      throw new Error("wrong target");
    }
    return event.target;
  }

  onFileSelectVid(input: HTMLInputElement,files:FileList): void {


    const file = (input.files as FileList)[0];
    if (file) {
      var reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (event) => {
        this.url_vid = (<FileReader>event.target).result as string;
      }
    }
    this.file_vid=files.item(0) as File;
    this.fileInfoVid = `${file.name} (${this.formatBytes(file.size)})`;
  }
  onFileSelectImg(input: HTMLInputElement,files:FileList): void {
    const file = (input.files as FileList)[0];
    if (file) {
      var reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (event) => {
        this.url_img = (<FileReader>event.target).result as string;
      }
    }
    this.file_prev=files.item(0) as File;
    this.fileInfoImg = `${file.name} (${this.formatBytes(file.size)})`;
  }
  onSubmit(){
    this.ngxService.start();
    this.service.getByUserId(this.profile.id).subscribe((res:Channel)=>{
      this.video.channel_id=res.id;
    })
    var json=JSON.stringify(this.video);
    this.formData.append('video_inf', json);
    this.formData.append('video', this.file_vid);
    this.formData.append('preview', this.file_prev);
    this.videoService.uploadVideo(this.formData).subscribe((res:any)=>{
      //
    })
    this.ngxService.stop();
  }
}

