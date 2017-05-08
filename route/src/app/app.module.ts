import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';
import { ListOneComponent } from './list-one/list-one.component';
import { ListTwoComponent } from './list-two/list-two.component';
import {Routes, RouterModule} from "@angular/router";
const appChildRoutes: Routes = [
  {path: "one", component: ListOneComponent},
  {path: "two/:id", component: ListTwoComponent},  //获取路由参数id
  // 如果地址栏中输入没有定义的路由就跳转到one路由界面
  {
    path: '**', redirectTo: "one"
  }
];
// 定义常量 路由
const appRoutes:Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {
    path: 'list',
    component: ListComponent,
    children: appChildRoutes
  }
];
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListComponent,
    ListOneComponent,
    ListTwoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
