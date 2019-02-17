import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {  map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Team } from '../models/team';

@Injectable({
  providedIn: 'root'
})
export class TeamService {
  constructor( private http:HttpClient) { }

  BASE_URL : string='https://api.football-data.org/v2/teams';

  getTeamInfo(id: number){
    const url = this.BASE_URL + '/' + id;
    return this.http.get(url,{headers: {'X-Auth-Token':'e756a53ce2f342d0ae4f46507438ba63'}}).pipe(map((response: any) => {
      return Team.fromJson(response);
    }));

  }

}
