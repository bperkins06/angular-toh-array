import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit {

  available_heroes = HEROES;
  selected_heroes: Hero[]=[];
  selected_heroes_ms: string[]=[];
  selectedHero: Hero;

  constructor() { }

  ngOnInit() {
  }

  addHero(hero: Hero): void {
    this.selectedHero = hero;
    if (this.selected_heroes.indexOf(hero) === -1) {
      this.selected_heroes.push(hero);
    }
  }

  removeHero(hero: Hero): void {
    this.selected_heroes = this.selected_heroes.filter(item => item !== hero);
  }
}
