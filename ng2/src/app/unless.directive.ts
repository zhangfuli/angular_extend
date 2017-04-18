import { Directive , Input} from '@angular/core';
import {TemplateRef , ViewContainerRef } from '@angular/core';
@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {

  //viewContainerRef 代表一个容器,可以附加一个或多个视图
  constructor(
    private _templateRef: TemplateRef<any>,
    private _viewContainer: ViewContainerRef
  ) { }
  @Input() set appUnless(condition: boolean) {
    if (!condition) {
      this._viewContainer.createEmbeddedView(this._templateRef);
    } else {
      this._viewContainer.clear();
    }
  }

}
