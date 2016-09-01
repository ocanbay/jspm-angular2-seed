import { Component, OnInit, Input } from '@angular/core';
import heroDetailHtml from './hero-detail.html';

import {Hero} from '../model/hero';



@Component({
    selector: 'hero-detail',
    template: heroDetailHtml
})
export class HeroDetailComponent implements OnInit {

    ngOnInit() {
    }

    @Input()
    hero: Hero;

}
