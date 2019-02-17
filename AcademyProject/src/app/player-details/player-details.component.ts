import { Component, OnInit } from '@angular/core';
import { Player } from '../models/player';
import { PlayerService } from '../services/player.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-player-details',
  templateUrl: './player-details.component.html',
  styleUrls: ['./player-details.component.css']
})
export class PlayerDetailsComponent implements OnInit {
  player : Player =null;
  id: number;

  constructor(private playerService:PlayerService , private route: ActivatedRoute , private location: Location) {
    this.id = +this.route.snapshot.paramMap.get('playerid');
    this.playerService.getPlayerInfo(this.id).pipe()
    .subscribe(p=>{
    this.player=p;
  });
  }

  ngOnInit() {


  }
  cancel() {
    this.location.back(); // <-- go back to previous location on cancel
  }

}
