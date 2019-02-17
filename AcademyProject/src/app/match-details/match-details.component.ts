import { Component, OnInit } from '@angular/core';
import { MatchService } from '../services/match.service';
import { Match } from '../models/match';
import { ActivatedRoute } from '@angular/router';
import { Stat } from '../models/matchStats';

@Component({
  selector: 'app-match-details',
  templateUrl: './match-details.component.html',
  styleUrls: ['./match-details.component.css']
})
export class MatchDetailsComponent implements OnInit {
stat: Stat;
id:number;
location : Location;
  constructor(private matchService : MatchService, private route: ActivatedRoute) {
    this.id = +this.route.snapshot.paramMap.get('matchid');
    this.matchService.getMatchInfo(this.id).pipe()
    .subscribe(p=>{
    this.stat=p;
  });
   }

  ngOnInit() {
  }


}
