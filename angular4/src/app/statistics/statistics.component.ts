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
    let self = this;
    //disable contextmenu and set filtertype
    $('datatable-header-cell').ready(function(){
      $('datatable-header-cell').on('contextmenu',function(){
        self.setFilterType($(this)[0].innerText);
        return false;
      });
    });
  }

  setType(siType){
    this.sType = siType;
  }
  getData(output){
    this.jRows = output;
    this.jColumns = [{ name: 'deviceId'}, {name: 'end'}, {name: 'pid'}, {name: 'start'}, {name: 'type'}, {name: 'updatedAt'}];
  }

  setFilterType(title){
    $('#filterInput').attr('placeholder', title);
  }
}
