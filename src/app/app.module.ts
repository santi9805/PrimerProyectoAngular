import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { APP_ROUTING } from './app-routing.module';

import { AppComponent } from './app.component';

//service
import{HeroesService} from './service/heroes.service';

import {HeaderComponent} from './components/header/header.component';
import { BodyComponent } from './components/body/body.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { AboutComponent } from './components/about/about.component';
import { HeroeComponent } from './components/heroe/heroe.component';
@NgModule({
  declarations: [
    AppComponent, 
    HeaderComponent, BodyComponent, FooterComponent, HeroesComponent, AboutComponent, HeroeComponent
  ],
  imports: [
    BrowserModule, 
    APP_ROUTING 
  ],
  providers: [
    HeroesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
