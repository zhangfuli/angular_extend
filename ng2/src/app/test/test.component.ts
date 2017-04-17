import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',  //选择器的名字   <app-test></app-test>
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor() {}
  ngOnInit() {  //生命周期的钩子这个方法会在组件初始化时候调用
  }
  name: string = 'zfl';
  active: boolean = true;
  dosomething($event){       //点击事件触发
    alert('clicked');
  }
  phoneClick($event){
    alert($event);
  }
  isActive($event){
    this.active = !this.active;
  }
}
