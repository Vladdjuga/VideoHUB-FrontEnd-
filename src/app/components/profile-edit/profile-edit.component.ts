import { Component, OnInit } from '@angular/core';
import { RegisterRequest } from 'src/app/models/registerrequest';

@Component({
  selector: 'app-profile-edit',
  templateUrl: './profile-edit.component.html',
  styleUrls: ['./profile-edit.component.css']
})
export class ProfileEditComponent implements OnInit {

  
  signup=new RegisterRequest();
  ngOnInit(): void {
  }
}
