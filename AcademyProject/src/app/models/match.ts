import { Team } from './team';
import { navigationCancelingError } from '@angular/router/src/shared';


enum MatchStruct{
  id='id',
 utcDate= 'utcDate',
 status= 'status',
 minute='minute',
 attendance='attendance',
 venue='venue',
 matchday='matchday',
 stage='stage',

}

export class Match{
    id: number;
    utcDate: string;
    status: string;
    minute: string;
    attendance: number;
    venue: string;
    matchday: number;
    stage: string;
    homeTeam: Team;
    awayTeam: Team;
    scorehome: string;
    scoreaway: string;
    homepartial:string;
    awaypartial:string;
    currentMatch: number;

  static fromJson(json: any): Match{
    let m :Match= new Match();
      let teamTmp = new Team();
      let teamHome = new Team();

      m.id=json.id;
      m.stage= json.stage;
      m.matchday= json.matchday;
      m.homeTeam=json.homeTeam;
      m.awayTeam=json.awayTeam;
      m.scorehome = json.score['fullTime']['homeTeam'];
      m.scoreaway = json.score['fullTime']['awayTeam'];
      m.homepartial = json.score['halfTime']['homeTeam'];
      m.awaypartial = json.score['halfTime']['awayTeam'];
      m.currentMatch=json.season['currentMatchday'];


//console.log(json['matches']);
return m;

    }

    }
