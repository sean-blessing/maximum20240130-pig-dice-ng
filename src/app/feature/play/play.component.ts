import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Game } from 'src/app/model/game';
import { GameStats } from 'src/app/model/game-stats';
import { Games } from 'src/app/model/games';
import { GamesService } from 'src/app/service/games.service';

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.css'],
})
export class PlayComponent implements OnInit {
  gamesCount: number = 0;
  gameStats: GameStats = new GameStats();

  constructor(
    private gameService: GamesService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    // get gamesCount from route
    this.route.paramMap.subscribe((params) => {
      this.gamesCount = Number(params.get('count'));
      // create instance of Games class to store games
      let games: Games = new Games();

      // keep stats for the games played
      let gameStats: GameStats = new GameStats();
      let highestScore: number = 0;
      let highestNumRolls: number = 0;
      let totalRolls: number = 0;
      
      // play the game as many times as user requested
      for (let i = 0; i < this.gamesCount; i++) {
        // call playGame
        let game: Game = this.playGame();
        highestScore = Math.max(highestScore, game.score);
        highestNumRolls = Math.max(highestNumRolls, game.rollCount);
        totalRolls += game.rollCount;
        game.gameNumber = i + 1;
        games.gamesArray.push(game);
      }
      
      // set gameStats
      gameStats.totalGamesPlayed = this.gamesCount;
      gameStats.highestScore = highestScore;
      gameStats.highestScoreNumRolls = highestNumRolls;
      gameStats.avgNumRolls = totalRolls / this.gamesCount;

      //set properties of gameService
      this.gameService.games = games;
      this.gameService.stats = gameStats;
      
      // forward to results page, passing games array
      this.router.navigateByUrl('/results');
    });
  }

  playGame(): Game {
    let game: Game = new Game();
    let score: number = 0;
    let roll = this.rollDie();
    let rollCount = 0;
    while (roll != 1) {
      rollCount++;
      score += roll;
      roll = this.rollDie();
    }
    game.rollCount = rollCount;
    game.score = score;
    return game;
  }

  rollDie(): number {
    return Math.floor(Math.random() * 6) + 1;
  }
}
