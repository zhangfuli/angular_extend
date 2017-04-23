import { Injectable } from '@angular/core';
import { Hero } from '../assets/hero';

@Injectable()
export class HeroService {

  constructor() { }
  getHeroes(){
    return Promise.resolve(HEROES);
  }
  getHeroesSlowly(){
    return new Promise<Heros[]>(
      resolve=>{
        setTimeout(()=>{
          resolve(HEROES);
        },2000);
      }
    )
  }

}
