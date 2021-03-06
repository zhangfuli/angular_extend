import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { MigrateComponent } from './migrate/migrate.component';

import { DirectivesDirective } from './directives.directive';
import { HightlightDirective } from './hightlight.directive';
import { UnlessDirective } from './unless.directive';
import { LifecycleComponent } from './lifecycle/lifecycle.component';
import { ExponentialPipe } from './exponential.pipe';
import { FetchPipe } from './fetch.pipe';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
//
import {Routes,RouterModule} from '@angular/router';
// 定义常量 路由
const appRoutes:Routes = [
  {path: 'heroes', component: TestComponent},
  // {
  //   path: 'list',
  //   component: ListComponent,
  //   children: appChildRoutes
  // }
];
@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    MigrateComponent,
    DirectivesDirective,
    HightlightDirective,
    UnlessDirective,
    LifecycleComponent,
    ExponentialPipe,
    FetchPipe,
    HeroDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
