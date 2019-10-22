import { Component, OnInit } from '@angular/core';
import {HeroesService, Heroe} from 'src/app/service/heroes.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
})
export class HeroesComponent implements OnInit {

  heroes: Heroe[] = [];
  constructor( private heroesServicio: HeroesService) { }

  ngOnInit() {
    this.heroes=this.heroesServicio.getHeroes();

  }

}
