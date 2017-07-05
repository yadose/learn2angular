import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { InputComponent } from './input/input.component';
import { ControllingComponent } from './controlling/controlling.component';
import { StatisticsComponent } from './statistics/statistics.component';

const routes: Routes = [
  // basic routes
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: DashboardComponent },
  // authentication
  { path: 'login', component: LoginComponent }
];

@NgModule({
  declarations: [
  AppComponent,
  DashboardComponent,
  LoginComponent,
  ControllingComponent,
  StatisticsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
