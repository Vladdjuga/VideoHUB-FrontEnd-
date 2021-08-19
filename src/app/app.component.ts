import { Component } from '@angular/core';
import { NotifierService } from 'angular-notifier';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'videoHub';
  isOpened=false;
  constructor(private notifierService: NotifierService){
    
  }
  ngOnInit(){
    this.notifierService.notify('success', 'You are awesome! I mean it!');
  }
  show(){
    this.isOpened=!this.isOpened;
  }

  
}
