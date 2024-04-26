import { Game } from './game';

export class Games {
  gamesArray: Game[];
  highScore: number = 0;
  totalRollsForHighScore: number = 0;

  constructor(gamesArray: Game[] = []) {
    this.gamesArray = gamesArray;
  }
}
