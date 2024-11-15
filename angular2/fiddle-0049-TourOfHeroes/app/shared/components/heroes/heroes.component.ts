import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {HeroInterface} from '../../interfaces/hero.interface';
import { HeroService } from '../../services/hero.service';


@Component({
  selector: 'heroes',
  templateUrl: './app/shared/components/heroes/heroes.component.html',
  styleUrls: ['./app/shared/components/heroes/heroes.component.css']
})
export class HeroesComponent implements OnInit {
  title: string = 'Tour of Heroes';
  heroes: HeroInterface[];
  selectedHero: HeroInterface;

  constructor(
    private router: Router,
    private heroService: HeroService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  onSelect(hero: HeroInterface): void {
    this.selectedHero = hero;
  }

  getHeroes(): void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.create(name)
      .then(hero => {
        this.heroes.push(hero);
        this.selectedHero = null;
      });
  }

  delete(hero: HeroInterface): void {
    this.heroService
      .delete(hero.id)
      .then(() => {
        this.heroes = this.heroes.filter(h => h !== hero);
        if (this.selectedHero === hero) { this.selectedHero = null; }
      });
  }


}
