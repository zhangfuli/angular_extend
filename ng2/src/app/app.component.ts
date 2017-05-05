import { Component , NgModule, OnInit} from '@angular/core';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { DirectivesDirective } from './directives.directive';
import { HightlightDirective } from './hightlight.directive';
import { UnlessDirective }from './unless.directive';
import { LifecycleComponent } from './lifecycle/lifecycle.component';
import { ExponentialPipe } from './exponential.pipe';
import { FetchPipe } from './fetch.pipe';
import { Hero } from  '../assets/hero';
import { HeroDetailComponent } from './hero-detail/hero-detail.component'
import { HeroService } from './hero.service';
import {HEROES} from "../assets/heroes";
import {HeroHttpService} from "./hero-http.service";
import {Response} from "@angular/http";

@Component({
  selector: 'app-root',
  //directives:[DirectivesDirective, HightlightDirective],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [HeroService,HeroHttpService]
})

@NgModule({
  declarations:[AppComponent,DirectivesDirective, HightlightDirective,
    UnlessDirective,LifecycleComponent,ExponentialPipe,FetchPipe,
    HeroDetailComponent], //<---need to declare
  schemas:     [CUSTOM_ELEMENTS_SCHEMA]             //<---added this line
})

export class AppComponent implements OnInit{
  //构造函数注入服务
  constructor (private _heroService: HeroService,private _heroHttpService:HeroHttpService){}
  title = 'app works!';
  heroes: Hero[];
  selectedHero: Hero;
  getHeroes() {
    this._heroService.getHeroes().then(heroes => this.heroes = heroes);
  }
  getHeroesSlowly() {
    this._heroService.getHeroesSlowly().then(heroes => this.heroes = heroes);
  }
  onSelect(hero: Hero) { this.selectedHero = hero; }
  getOnline(){
    this._heroHttpService.getData("http://localhost:8089/documentary/getDocument")
      .subscribe((res:any)=>{
        console.log("res:"+res);
        console.log(res.json());
        //////跨域问题没有解决
      })
  }
  ngOnInit(){
    this.getHeroesSlowly();
    this.getOnline();
  }
}
