import { Match } from './match';

export class Stat{
  match: Match ;
  numbofMatch: number;
  totalGoals:number;
  hwin:number;
  hpar:number;
  hlose:number;

  awin: number;
  apar: number;
  alose:number;




  static fromJson(json: any): Stat{
  let s : Stat= new Stat();
  s.match = Match.fromJson(json['match']);

  s.numbofMatch= json['head2head']['numberOfMatches'];
  s.totalGoals= json['head2head']['totalGoals'];
  s.hwin= json['head2head']['homeTeam']['wins'];
  s.hpar= json['head2head']['homeTeam']['draws'];
  s.hlose= json['head2head']['homeTeam']['losses'];

  s.awin= json['head2head']['awayTeam']['wins'];
  s.apar= json['head2head']['awayTeam']['draws'];
  s.alose= json['head2head']['awayTeam']['losses'];

console.log(s);
return s;
  }
}

