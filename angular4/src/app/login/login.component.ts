import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  sCLoginName: string;
  sCLoginPword: string;
  sCLoginSubmit: string;
  sCLoginInputclass: string;
  constructor() {
    this.sCLoginName = 'name';
    this.sCLoginPword = 'password';
    this.sCLoginSubmit = 'send';
    this.sCLoginInputclass = 'text-field';
  }

  ngOnInit() {
  }

  sendLogin(siName,siPassword){
    //login function needs to be implemented later on
    console.log(siName+siPassword);

  }
}
