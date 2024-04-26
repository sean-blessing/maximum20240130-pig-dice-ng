import { Injectable } from '@angular/core';
import { Games } from '../model/games';
import { GameStats } from '../model/game-stats';

@Injectable({
  providedIn: 'root'
})
export class GamesService {
  games: Games = new Games();
  stats: GameStats = new GameStats();

  constructor() { }
}
