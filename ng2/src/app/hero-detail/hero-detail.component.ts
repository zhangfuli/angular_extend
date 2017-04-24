import { Component, OnInit } from '@angular/core';
import { Hero } from '../../assets/hero';
@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css'],
  inputs : [ 'hero' ]
})
export class HeroDetailComponent implements OnInit {

  constructor() { }
  hero : Hero;
  ngOnInit() {
  }

}
