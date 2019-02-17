import { Match } from './match';
import { Days } from './days';

export class Champions
{
  public id: number;
  public name:string;

  public days:Days[]=[];


  constructor() {}

  static fromJson(json : any):Champions{
    let champions : Champions= new Champions();
     let arrayofMatch : Match[] = [];
      let i = 0 ;


   for(let item of json['matches']){
/**AGGIUNGO ALL'ARRAY DI MATCH  E INSTANZIO NUOVE GIORNATE */

     arrayofMatch.push(Match.fromJson(item));
     let dd:Days=new Days(item.matchday);
     champions.days[item.matchday]= dd;


     }
     //console.log(arrayofMatch);
/**OTTENGO I MATCH PER GIORNATA */
  for(let i = 0 ; i< arrayofMatch.length;i++){
      champions.days[arrayofMatch[i].matchday].mforDay.push(arrayofMatch[i]);
      }


     return champions;
   }









}
