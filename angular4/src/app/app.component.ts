import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'baIT monitoring tool app';
  pname = 'username';
  ppword = 'password';
  showOutput(){
    console.log('huuhu');
  }
  sendLogin(name,password){
    console.log('sent name:'+name);
    console.log('sent password:'+password);
  }
}
