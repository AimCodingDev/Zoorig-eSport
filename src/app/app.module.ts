import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { FooterComponent } from './footer/footer.component';
import { GamesComponent } from './games/games.component';
import { RocketLeagueComponent } from './games/rocket-league/rocket-league.component';
import { FifaComponent } from './games/fifa/fifa.component';
import { SuperSmashBrosComponent } from './games/super-smash-bros/super-smash-bros.component';
import { CallOfDutyComponent } from './games/call-of-duty/call-of-duty.component';
import { FortniteComponent } from './games/fortnite/fortnite.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { GameComponent } from './games/game/game.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutUsComponent,
    FooterComponent,
    GamesComponent,
    RocketLeagueComponent,
    FifaComponent,
    SuperSmashBrosComponent,
    CallOfDutyComponent,
    FortniteComponent,
    DropdownDirective,
    GameComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
