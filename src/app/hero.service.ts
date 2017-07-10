import { HEROES } from './mock-heroes';
import { Injectable } from '@angular/core';
import { Hero } from "./hero";

@Injectable()
export class HeroService {

    constructor() { }
    getHero(id:number):Promise<Hero>{
        return this.getHeroes().then(heroes => heroes.find(hero => hero.id === id));
    }
    getHeroes():Promise<Hero[]>{
        return Promise.resolve(HEROES);
    }
    getHeroesSlowly():Promise<Hero[]>{
        return new Promise(resolve =>{
            setTimeout(()=> resolve(this.getHeroes()),2000);
        });
    }
}