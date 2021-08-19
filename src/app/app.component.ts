import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'videoHub';
  isOpened=false;
  ngOnInit(){
  }
  show(){
    this.isOpened=!this.isOpened;
  }

  
}
