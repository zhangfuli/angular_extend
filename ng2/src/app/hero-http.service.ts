import { Injectable } from '@angular/core';
import {Http} from "@angular/http";

@Injectable()
export class HeroHttpService {

  constructor(private http: Http) { }
  getData (url : string) {
    return this.http.get(url);
  }

}
