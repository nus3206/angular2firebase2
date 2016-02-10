import {Component, Inject, OnInit} from 'angular2/core';
import {Hero} from './hero';
import {HeroDetailComponent} from './hero-detail.component';
import {HeroService} from './hero.service';

@Component({
    selector: 'my-app',
    templateUrl: 'my-app2.html',
    styleUrls: ['app.css'],
    directives: [HeroDetailComponent],
    providers: [HeroService]
})

export class AppComponent implements OnInit {
    public title: string = 'Tour of Heroes';
    public heroes: any; /* The data type originally specified here was, Hero[]*/
    public selectedHero: Hero;

    constructor(private _heroService: HeroService) {
    }

    getHeroes() {
        this._heroService.getHeroes().then(heroes => this.heroes = heroes);
    }

    ngOnInit() {
        this.getHeroes();
    }

    onSelect(hero: Hero) { this.selectedHero = hero; }
}