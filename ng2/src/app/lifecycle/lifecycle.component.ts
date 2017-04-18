import {Component,  Input} from '@angular/core';
import {OnChanges, SimpleChange,OnInit,AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewChecked,OnDestroy} from '@angular/core';
@Component({
  selector: 'app-lifecycle',
  templateUrl: './lifecycle.component.html',
  styleUrls: ['./lifecycle.component.css']
})
export class LifecycleComponent implements OnChanges, OnInit,AfterContentInit,AfterContentChecked,AfterViewInit, AfterViewChecked, OnDestroy {


  constructor() { }
  @Input() name:string;
  dosomething(){
    console.log("********dosomething*********");
    setTimeout(()=>{
      console.log("***********setTimeout*************");
      return this.name = 'susan';
    },1000)
  }
  ngOnInit() {console.log('onInit');}
  ngOnDestroy(){console.log('OnDestroy');}
  ngOnChanges(changes: {[propertyName: string]: SimpleChange}){console.log('ngOnChanges',changes);}
  ngAfterContentInit(){console.log('AfterContentInit');}
  ngAfterContentChecked(){console.log('AfterContentChecked');}
  ngAfterViewInit(){console.log('AfterViewInit');}
  ngAfterViewChecked(){console.log('AfterViewChecked');}


}
