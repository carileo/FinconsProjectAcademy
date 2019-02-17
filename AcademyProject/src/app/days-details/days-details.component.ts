import { Component, OnInit } from '@angular/core';
import { DayService } from '../services/day.service';
import { Match } from '../models/match';
import { Days } from '../models/days';
import { Champions } from '../models/champions';

@Component({
  selector: 'app-days-details',
  templateUrl: './days-details.component.html',
  styleUrls: ['./days-details.component.css']
})
export class DaysDetailsComponent implements OnInit {
  matches : Match[] =[];
  giornata : Days;
  giornate : Days[]=[];
  c : Champions ;
   lastMatch: number;
  number : number[]=[];

  constructor(private dayService:DayService) {

       this.dayService.getDays().pipe()
    .subscribe(p=>{
    this.c=p;
    /** mi prendo la giornata corrente */
    this.lastMatch = this.c.days[1].mforDay[1].currentMatch;
    this.matches=this.c.days[this.lastMatch].mforDay;
    this.giornate=this.c.days;
    console.log(this.giornate);
    //console.log(this.matches);

    this.getDaynumb();
  });



   }
//Conto quante giornate sono;
   public getDaynumb(){
     for(let i = 1 ; i< this.giornate.length;i++){
      this.number.push(i);
     }

   }


   public changedays(id:number) {
    this.matches=this.c.days[id].mforDay;

  }

  ngOnInit() {

  }



}
