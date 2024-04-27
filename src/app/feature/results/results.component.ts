import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Game } from 'src/app/model/game';
import { GameStats } from 'src/app/model/game-stats';
import { Games } from 'src/app/model/games';
import { GamesService } from 'src/app/service/games.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css'],
})
export class ResultsComponent implements OnInit {
  data: any;
  games: Games = new Games();
  stats: GameStats = new GameStats();

  constructor(private router: Router,
              private gameSvc: GamesService,
  ) {}

  ngOnInit(): void {
    this.games = this.gameSvc.games;
    this.stats = this.gameSvc.stats;
  }

  play() {
    this.router.navigateByUrl('/welcome');
  }
  
}
