import { NgModule } from '@angular/core';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { BodyComponent } from './components/body/body.component';
import { RouterModule } from '@angular/router';
import {HeroeComponent} from './components/heroe/heroe.component';


const APP_ROUTES: Routes = [
  {path: 'home', component:BodyComponent},
  {path: 'about',component:AboutComponent},
  {path: 'heroes',component:HeroesComponent},
  {path: 'heroe/:id',component:HeroeComponent},
  {path: '**', pathMatch: 'full', redirectTo: ''}

];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, {useHash:true})