import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

// import {Router} from "@angular/router";
//
// constructor(public router: Router) {
//   // 相当于window.location.href，界面跳转
//   router.navigateByUrl('home');
// }
