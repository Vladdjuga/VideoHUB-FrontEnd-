import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  constructor(private service:UserService) { }
  users:User[]=[];

  ngOnInit() {
    this.service.get().subscribe((res:User[])=>{
      this.users=res;
      this.users.forEach(user=>{
        this.service.getImage(user.id).subscribe((res:any)=>{
          console.log(res);
          user.img=res;
        })
      })
    })
  }

}
