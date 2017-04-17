import { Directive } from '@angular/core';
import { ElementRef, Input } from '@angular/core';
@Directive({
  selector: '[appHightlight]',
  //实现指令监听
  host:{
    '(mouseenter)':'onMouseEnter()',
    '(mouseleave)':'onMouseLeave()'
  }
})
export class HightlightDirective {
  //给成员变量highlightColor，装饰一个@Input('appHightlight')，使其等于从appHightlight输入的属性
  @Input('appHightlight') hightlightColor: string;
  private _defaultColor = 'red';
  //setter 函数 设置private的值
  @Input() set defaultColor(colorname : string ){
    this._defaultColor = colorname || this._defaultColor;
  }
  constructor(private el: ElementRef) { }
  onMouseEnter(){
    this._highlight(this.hightlightColor||this._defaultColor);
  }
  onMouseLeave(){
    this._highlight(null);
  }
  private _highlight(color:string) {
    this.el.nativeElement.style.backgroundColor = color;
  }


}
