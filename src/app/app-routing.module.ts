import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AboutUsComponent} from './about-us/about-us.component';
import {GamesComponent} from './games/games.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'about_us', component: AboutUsComponent},
  {path: 'games', component: GamesComponent},
  {path: '', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
