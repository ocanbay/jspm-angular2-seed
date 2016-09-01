import { Component, OnInit, Inject } from '@angular/core';
import heroHtml from './hero.html';

import {Hero} from '../model/hero';
import {HeroService} from '../services/hero.service';

@Component({
    selector: 'hero',
    template: heroHtml,
    providers: [HeroService]
})
export class HeroComponent implements OnInit {

    title = 'Tour of Heroes';
    heroes: Hero[];
    selectedHero: Hero;

    constructor( @Inject(HeroService) private heroService) { }

    getHeroes(): void {
        this.heroes = this.heroService.getHeroes();
    }

    ngOnInit() {
        this.getHeroes();
    }


    onSelect(hero: Hero): void {
        this.selectedHero = hero;
    }

}
