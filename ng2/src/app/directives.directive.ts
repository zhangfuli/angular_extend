import {Directive, ElementRef, Renderer} from '@angular/core';

@Directive({
  selector: '[appDirectives]'
})
export class DirectivesDirective {
//注入ElementRef获取当前dom元素
  constructor(private _element:ElementRef,private renderer:Renderer) {
    renderer.setElementStyle(_element.nativeElement,'color','red');
  }
}
