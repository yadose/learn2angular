import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';




@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit {

  sType: string;
  jRows: object; //jsonstring
  jColumns: object; //jsonstring

  constructor() {
    this.sType = 'job';
  }

  ngOnInit() {

  }

  setType(siType){
    this.sType = siType;
    let self = this;
    $('datatable-header-cell').on('click',function(){
      self.setFilterPlaceholder($(this)[0].innerText);
    });
  }
  getData(output){
    this.jRows = output;
    this.jColumns = [{ name: 'deviceId'}, {name: 'end'}, {name: 'pid'}, {name: 'start'}, {name: 'type'}, {name: 'updatedAt'}];
  }

  setFilterPlaceholder(title){
    $('#filterInput').attr('placeholder', title);
  }

}
