import { Component, OnInit } from '@angular/core';
import { TeamService } from '../services/team.service';
import { Team } from '../models/team';
import { ActivatedRoute } from '@angular/router';
import { Player } from '../models/player';

@Component({
  selector: 'app-team-details',
  templateUrl: './team-details.component.html',
  styleUrls: ['./team-details.component.css']
})
export class TeamDetailsComponent implements OnInit {
team : Team;
private sub:any;
id : number;
img: string;
squad: Player[]=[];
private location: Location;

  constructor(private teamService: TeamService ,private route: ActivatedRoute) {
    this.id = +this.route.snapshot.paramMap.get('id');


    console.log(this.id);// (+) converts string 'id' to a number
    this.teamService.getTeamInfo(this.id).pipe()
    .subscribe(p=>{
    this.team=p;
    this.squad=this.team.squadPlayer;
    this.img = this.team.crestUrl;
  });

  }


  ngOnInit() {



  }





}
