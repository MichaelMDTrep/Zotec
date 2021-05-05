import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit {

  heroes = HEROES;
  selectedHero?: Hero;

  constructor() { }

  ngOnInit() {
  }
// lifecycle hook that angular calls shortly after creating a component. it's a good place to puthinitialization logic
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}