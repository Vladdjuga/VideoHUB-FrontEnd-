import { Component, OnInit } from '@angular/core';
import { NotifierService } from 'angular-notifier';
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Component({
  selector: 'app-load-video',
  templateUrl: './load-video.component.html',
  styleUrls: ['./load-video.component.css']
})
export class LoadVideoComponent implements OnInit {

  constructor(private ngxService: NgxUiLoaderService) { }

  ngOnInit() {
  }

  url_vid = "";
  url_img = "https://grinvich.com/static/assets/images/media-default-video.png";
  fileInfoVid = "";
  fileInfoImg = "";

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
  onFileSelectVid(input: HTMLInputElement): void {


    const file = (input.files as FileList)[0];
    if (file) {
      var reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (event) => {
        this.url_vid = (<FileReader>event.target).result as string;
      }
    }
    this.fileInfoVid = `${file.name} (${this.formatBytes(file.size)})`;
  }
  onFileSelectImg(input: HTMLInputElement): void {
    const file = (input.files as FileList)[0];
    if (file) {
      var reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (event) => {
        this.url_img = (<FileReader>event.target).result as string;
      }
    }
    this.fileInfoImg = `${file.name} (${this.formatBytes(file.size)})`;
  }
}
