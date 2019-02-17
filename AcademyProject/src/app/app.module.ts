import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule }    from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlayerDetailsComponent } from './player-details/player-details.component';
import { TeamDetailsComponent } from './team-details/team-details.component';
import { MatchDetailsComponent } from './match-details/match-details.component';
import { DaysDetailsComponent } from './days-details/days-details.component';
import { StandingDetailsComponent } from './standing-details/standing-details.component';
import { ChampionsDetailsComponent } from './champions-details/champions-details.component';

@NgModule({
  declarations: [
    AppComponent,
    PlayerDetailsComponent,
    TeamDetailsComponent,
    MatchDetailsComponent,
    DaysDetailsComponent,
    StandingDetailsComponent,
    ChampionsDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
