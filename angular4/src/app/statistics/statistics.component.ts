import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';




@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit {

  sType: string;
  constructor() {
    this.sType = 'job';
    $('body').append('<div id="sometable"></div>');
    $('#sometable').html('sup');
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
