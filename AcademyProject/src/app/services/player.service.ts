import { Injectable } from '@angular/core';
import {Player} from '../models/player';
import { Observable } from 'rxjs';
import {  map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

BASE_URL : string='https://api.football-data.org/v2/players';



  constructor( private http:HttpClient) { }

  getPlayer(): Observable<Player[]> {
    const url = this.BASE_URL;
    return this.http.get(url ,{headers: {'X-Auth-Token':'e756a53ce2f342d0ae4f46507438ba63'}}).pipe(map ((response: any[]) => {
      return(response.map(playerJson => Player.fromJson(playerJson)));
    }));
  }


  getPlayerInfo(id: number){
    const url = this.BASE_URL + '/' + id;
    return this.http.get(url,{headers: {'X-Auth-Token':'e756a53ce2f342d0ae4f46507438ba63'}}).pipe(map((response: any) => {
      return Player.fromJson(response);
    }));

  }
}
