import { Component , NgModule} from '@angular/core';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { DirectivesDirective } from './directives.directive';
import { HightlightDirective } from './hightlight.directive';
import { UnlessDirective }from './unless.directive';
import { LifecycleComponent } from './lifecycle/lifecycle.component';
@Component({
  selector: 'app-root',
  //directives:[DirectivesDirective, HightlightDirective],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
@NgModule({
  declarations:[AppComponent,DirectivesDirective, HightlightDirective,UnlessDirective,LifecycleComponent], //<---need to declare
  schemas:     [CUSTOM_ELEMENTS_SCHEMA]             //<---added this line
})
export class AppComponent {
  title = 'app works!';
}
