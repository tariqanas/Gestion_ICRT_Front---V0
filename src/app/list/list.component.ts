import { Component, OnInit } from '@angular/core';
import { BreweriesServiceService } from '../breweries-service.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {


  constructor(private mkt: BreweriesServiceService) {}
  ngOnInit() {
    this.mkt.myMethod();
  }


}
