import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { HostListener } from '@angular/core';


@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit {
  @HostListener("document:keypress", ['$event'])
  handleKeyboardEvent(event: KeyboardEvent){
    if(event.srcElement.id.length > 0 && event.srcElement.id == 'filterInput' && event.key == 'Enter'){
      //get text from filter input after pressing enter
      this.sendFilteredRequest($('#'+event.srcElement.id).val());
    }
  }
  sType: string;
  sFilter: string;
  jRows: any; //json array of objects
  jColumns: any; //json array of objects
  sActiveFilter: string;

  constructor() {
    this.sType = 'job';
    this.reloadTable();

  }

  ngOnInit() {

  }

  setTableError(siType){
    this.sType = 'error';
    this.reloadTable();
  }

  setTableJob(siType){
    this.sType = 'job';
    this.reloadTable();
  }

  getData(output){
    this.jColumns = [];
    //get columnnames
    for(var inner in output[0]){
      this.jColumns.push({name:inner});
    }
    this.jRows = output;
    this.setFilterListener();

  }

  setFilterType(title){
    $('#filterInput').attr('placeholder', title);
    this.sActiveFilter = title.replace(/(\r\n|\n|\r)/gm,"").trim();
  }

  setFilterListener(){
    let self = this;
    //disable contextmenu and set filtertype listener for columns on rightclick
    $('datatable-header-cell').ready(function(){
      $('datatable-header-cell').on('contextmenu',function(){
        self.setFilterType($(this)[0].innerText);
        return false;
      });
    });
  }

  sendFilteredRequest(filterText){
    this.sFilter = filterText;
  }

  reloadTable(){
    this.sActiveFilter = '';
    this.sFilter = 'reload';
    console.log('sadg');
  }
}
