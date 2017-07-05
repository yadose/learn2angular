import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  sName: string;
  sPword: string;
  sSubmit: string;
  constructor() {
    this.sName = 'name';
    this.sPword = 'password';
    this.sSubmit = 'send';
  }

  ngOnInit() {
  }

  sendLogin(){
    //login function needs to be implemented later on

  }
}
