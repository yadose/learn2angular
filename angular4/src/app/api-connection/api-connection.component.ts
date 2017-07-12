import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';

@Component({
  selector: 'app-api-connection',
  templateUrl: './api-connection.component.html',
  styleUrls: ['./api-connection.component.css']
})
export class ApiConnectionComponent implements OnInit {
  @Input() set sTablename(val: string){
  console.log('tablename refresh');
    this._sTablename = val;
    if(typeof this._sTablename!='undefined'){
    console.log('tablename refresh done');
      console.log(this._sTablename+'GET');
      this.makeRequestGET();
    }
  }
  @Input() set sFilter(val: string) {
  console.log('filter refresh');
    this._sFilter = val;
    if(val != '' && val != 'reload' && typeof this._sTablename!='undefined'){
      this.makeRequestPOST();
      console.log('POST');
    }
    else if(typeof this._sTablename!='undefined'){
      console.log(this._sTablename+'GET');
      this.makeRequestGET();
    }
  }
  @Input() sActiveFilter: string;
  @Output() onLoadingComplete: EventEmitter<object>;

  _sFilter: string;
  _sTablename: string;
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
    
  }

  makeRequestGET() {
    this.bLoading = true;
    this.oHttp.request(this.sUrl+this._sTablename)
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
    this.sUrl+this._sTablename+'/filter/',
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
