import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AboutUsComponent} from './about-us/about-us.component';
import {GamesComponent} from './games/games.component';
import {RocketLeagueComponent} from './games/rocket-league/rocket-league.component';
import {CallOfDutyComponent} from './games/call-of-duty/call-of-duty.component';
import {FifaComponent} from './games/fifa/fifa.component';
import {SuperSmashBrosComponent} from './games/super-smash-bros/super-smash-bros.component';
import {FortniteComponent} from './games/fortnite/fortnite.component';
import {GameComponent} from './games/game/game.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full' },
  {path: '', component: HomeComponent},
  {path: 'about-us', component: AboutUsComponent},
  {path: 'games',
    component: GamesComponent,
    children: [
      {path: '', component: GameComponent},
      {path: 'rocket-league', component: RocketLeagueComponent},
      {path: 'call-of-duty', component: CallOfDutyComponent},
      {path: 'fifa', component: FifaComponent},
      {path: 'super-smash-bros', component: SuperSmashBrosComponent},
      {path: 'fortnite', component: FortniteComponent},
      {path: '**', redirectTo: 'profile', pathMatch: 'full' }
    ]
  },
  {path: '**', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
