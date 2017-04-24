import { Injectable } from '@angular/core';
import { Hero } from '../assets/hero';
import { HEROES } from '../assets/heroes';

@Injectable()
export class HeroService {

  constructor() { }
  getHeroes(){
    return Promise.resolve(HEROES); //为了.then(){}
  }
  getHeroesSlowly(){
    return new Promise<Hero[]>(  //必须先return
      resolve=>{
        setTimeout(()=>{
          resolve(HEROES);
        },2000);
      }
    )
  }

}
