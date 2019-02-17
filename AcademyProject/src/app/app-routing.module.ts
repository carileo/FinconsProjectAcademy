import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DaysDetailsComponent } from './days-details/days-details.component';
import { PlayerDetailsComponent } from './player-details/player-details.component';
import { MatchDetailsComponent } from './match-details/match-details.component';
import { TeamDetailsComponent } from './team-details/team-details.component';
import { ChampionsDetailsComponent } from './champions-details/champions-details.component';

const routes: Routes = [{
  path: '',
  pathMatch: 'full',
  component: DaysDetailsComponent

},
{
  path: 'teamDetails/:id/playerDetails/:playerid',
  redirectTo: 'playerDetails/:playerid'
},
{
  path:"Champions",
  component: ChampionsDetailsComponent
},
{
  path:"playerDetails/:playerid",

  component: PlayerDetailsComponent
},
{
  path:"matchDetails/:matchid",

  component: MatchDetailsComponent
},
{
  path:"teamDetails/:id",

  component: TeamDetailsComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
