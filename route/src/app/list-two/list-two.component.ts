import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
//获取路由参数id (about:id) 添加模块 ActivatedRoute
@Component({
  selector: 'app-list-two',
  templateUrl: './list-two.component.html',
  styleUrls: ['./list-two.component.css']
})
export class ListTwoComponent implements OnInit {

  id: Object;
  constructor(public route:ActivatedRoute) {
    this.id = {};
  }
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params ; // {id: "xxx"}
    });
    console.log(this.id);
    //直接获取id值
    //this.route.snapshot.params["id"]
    console.log(this.route.snapshot.params["id"]);
  }

}
