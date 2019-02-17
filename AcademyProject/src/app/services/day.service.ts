import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import {  map } from 'rxjs/operators';
import { Days } from '../models/days';
import { Observable } from 'rxjs';
import { Champions } from '../models/champions';
@Injectable({
  providedIn: 'root'
})
export class DayService {

  //SERVIZIO CHE MI RIEMPIE L'OGGETTO GIORNATA COMPOSTO DA ID E MATCH[]

  constructor( private http:HttpClient) { }

  BASE_URL : string='https://api.football-data.org/v2/competitions/SA/matches';





  getDays(): Observable<Champions> {
    const url = this.BASE_URL;
    return this.http.get(url,{headers: {'X-Auth-Token':'e756a53ce2f342d0ae4f46507438ba63'}}).pipe(map((response: any) => {
      return Champions.fromJson(response);
    }));
  }



}
