import { RouterModule, Router } from '@angular/router';

import { Component, OnInit } from '@angular/core';
import { Hero } from "./hero";
import { HeroDetailComponent } from "./hero-detail.component";
import { HeroService } from "./hero.service";

@Component({
  selector: 'my-heroes',
  templateUrl: './heroes.component.html',
  styleUrls:['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];
  selectedHero: Hero;
  constructor(private heroService: HeroService,private router:Router) { }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
  getHeroes(): void {
    this.heroService.getHeroesSlowly().then(heroes => this.heroes = heroes);
  }
  ngOnInit(): void {
    this.getHeroes();
  }
  gotoDetail():void{
    this.router.navigate(['/detail',this.selectedHero.id]);
  }
}
