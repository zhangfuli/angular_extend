import { Component} from '@angular/core';
import { TestComponent }  from  '../test/test.component';
//TestComponent 是test.component.ts里面的class

@Component({
  selector: 'app-migrate',
  entryComponents: [TestComponent],   //不用directives 版本问题
  templateUrl: './migrate.component.html',
  styleUrls: ['./migrate.component.css']
})

export class MigrateComponent {
  items: Array<String>;
  constructor() {
    this.items = [
      "Hillary Clinton",
      "Martin",
      "Bernie"
    ];
  }

  ngOnInit() {
    console.log('[Component] onInit');
  }

}
