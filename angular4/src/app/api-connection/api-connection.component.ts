import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';

@Component({
  selector: 'app-api-connection',
  templateUrl: './api-connection.component.html',
  styleUrls: ['./api-connection.component.css']
})
export class ApiConnectionComponent implements OnInit {
  @Input() set sFilter(val: string) {
    this._sFilter = val;
    if(val != ''){
      this.makeRequestPOST();
    }
    else if(typeof this.sTablename!='undefined'){
      this.makeRequestGET();
    }
  }
  @Input() sTablename: string;
  @Input() sActiveFilter: string;
  @Output() onLoadingComplete: EventEmitter<object>;

  _sFilter: string;
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
    this.makeRequestGET();
  }

  makeRequestGET() {
    this.bLoading = true;
    this.oHttp.request(this.sUrl+this.sTablename)
    .subscribe((res: Response) => {
      this.oData = JSON.parse(res.json());
      this.bLoading = false;
      this.onLoadingComplete.emit(this.oData);
    }
    );
  }

  makeRequestPOST() {
    let body = '------WebKitFormBoundary7MA4YWxkTrZu0gW\r\nContent-Disposition: form-data; name=\"filter\"\r\n\r\n'+ this.sActiveFilter +'\r\n------WebKitFormBoundary7MA4YWxkTrZu0gW\r\nContent-Disposition: form-data; name=\"filtertext\"\r\n\r\n'+ this._sFilter +'\r\n';
    let headerdata = new Headers();
    headerdata.append('Content-Type','multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW');
    this.bLoading = true;
    this.oHttp.post(
    this.sUrl+this.sTablename+'/filter/',
    body,
    {
      headers: headerdata
    })
    .subscribe((res: Response) => {
      try {
        this.oData = JSON.parse(res.json());
      }
      catch (e){
        this.oData = [{result:'No Result'}];
      }
      this.bLoading = false;
      this.onLoadingComplete.emit(this.oData);
    }
    );
  }

}
