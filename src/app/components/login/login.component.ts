import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthRequest } from 'src/app/models/authrequest';
import { Claim } from 'src/app/models/claim';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  signin=new AuthRequest("","");
  constructor(private service:AuthService,private router:Router){
    
  }

  ngOnInit() {
  }
  signIn(){
      this.service.login(this.signin).subscribe((res:Claim)=>{
        if(res.name!=null){
          localStorage.setItem("token",res.name);
          this.router.navigate(["/profile"]);
        }
      })
  }
}
