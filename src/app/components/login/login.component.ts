import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthRequest } from 'src/app/models/authrequest';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  signin=new AuthRequest("","");
  constructor(private service:AuthService){
    
  }

  ngOnInit() {
  }
  signIn(){
      this.service.login(this.signin).subscribe((res)=>{
        
      })
  }
}
