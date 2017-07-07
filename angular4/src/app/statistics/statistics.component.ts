import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit {
  sType: string;
  constructor() {
    this.sType = 'job';
  }

  ngOnInit() {

  }

  setType(siType){
    this.sType = siType;
  }
  getData(output){
    console.log(output);
  }

}
