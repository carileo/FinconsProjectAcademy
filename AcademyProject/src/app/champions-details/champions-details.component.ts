import { Component, OnInit } from '@angular/core';
import { Days } from '../models/days';
import { DayService } from '../services/day.service';
import { Champions } from '../models/champions';


@Component({
  selector: 'app-champions-details',
  templateUrl: './champions-details.component.html',
  styleUrls: ['./champions-details.component.css']
})
export class ChampionsDetailsComponent implements OnInit {
  champions : Champions ;
  idSelected: number = null;
  constructor( private dayService : DayService) {

  }

  ngOnInit() {
    //this.generateChampions() // SERIEA ID;
  }

}
