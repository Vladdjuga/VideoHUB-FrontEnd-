import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css', './custom.css',
    './jquery.datetimepicker.css']
})
export class AdminComponent implements OnInit {

  constructor(private router: Router) { }

  part: string = "dashboard";

  ngOnInit() {
  }

  LogOut() {
    this.router.navigate(['/']);
  }
  Edit(id: number) {
    this.part = "edit";
  }
  Dashboard() {
    this.part = "dashboard";
  }
  Breeds() {
    this.part = "breeds";
  }
  Sales() {
    this.part = "sales";
  }
  Users() {
    this.part = "users";
  }
  Requests() {
    this.part = "requests";
  }
  Add() {
    this.part = "add";
  }
}