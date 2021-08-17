import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {
  options=["Мой канал","Подписки","Понравившиеся видео","История","Настройки"];

  constructor() { }

  ngOnInit() {
  }

}
