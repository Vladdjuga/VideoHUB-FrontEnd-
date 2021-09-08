import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {

  search="";
  private subscription: Subscription;
  constructor(private activateRoute: ActivatedRoute) { 
    this.subscription = activateRoute.params.subscribe(params => this.search = params['search']);
  }

  ngOnInit() {
  }

}
