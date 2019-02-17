import { Injectable } from '@angular/core';
import { Match } from '../models/match';
import { HttpClient } from '@angular/common/http';
import {  map } from 'rxjs/operators';
import { Stat } from '../models/matchStats';

@Injectable({
  providedIn: 'root'
})
export class MatchService {

  constructor( private http:HttpClient) { }

  BASE_URL : string='https://api.football-data.org/v2/matches';

  getMatchInfo(id: number){
    const url = this.BASE_URL + '/' + id;
    return this.http.get(url,{headers: {'X-Auth-Token':'e756a53ce2f342d0ae4f46507438ba63'}}).pipe(map((response: any) => {
      return Stat.fromJson(response);
    }));

  }



}
