import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Http,Response } from '@angular/http';

@Component({
  selector: 'app-api-connection',
  templateUrl: './api-connection.component.html',
  styleUrls: ['./api-connection.component.css']
})
export class ApiConnectionComponent implements OnInit {
  @Input() sTablename: string;
  @Output() onLoadingComplete: EventEmitter<object>;

  sUrl: string;
  oData: Object;
  bLoading: boolean;
  oHttp: Http;

  constructor(http: Http) {
    this.oHttp = http;
    this.sUrl = 'http://localhost:8080/api/v1/';
    this.onLoadingComplete = new EventEmitter();
  }

  ngOnInit() {
    this.makeRequest();
  }

  makeRequest() {
    this.bLoading = true;
    this.oHttp.request(this.sUrl+this.sTablename)
    .subscribe((res: Response) => {
      this.oData = res.json();
      this.bLoading = false;
      this.onLoadingComplete.emit(this.oData);
    }
    );
  }

}
