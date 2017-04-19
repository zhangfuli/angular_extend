
declare var fetch;
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fetch',
  pure : false
  //A "pure" pipe is only re-evaluated when either the input or any of the arguments change.
})
export class FetchPipe implements PipeTransform {
  private fetchedValue : any ;
  private fetchPromise : Promise<any> ;
  transform(value: any, args?: any): any {
    if ( !this.fetchPromise){
      this.fetchPromise = fetch(value)     //fetch获取数据
        .then((result:any)=>result.json())
        .then((json:any)=>this.fetchedValue=json);

    }
    return this.fetchedValue;
  }
//将pure参数设为false
 // 在成员函数transform中，执行fetch请求，将结果赋给this.fetchedValue = json，最后返回结果
//  如果this.fetchPromise这个成员变量已经被定义过，则直接返回成员变量fetchedValue
}
