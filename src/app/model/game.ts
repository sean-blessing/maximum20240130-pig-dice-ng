export class Game {
  gameNumber: number;
  rollCount: number
  score: number;
  isHighScore: boolean;

  constructor( gameNumber: number = 0, rollCount: number = 0, score: number = 0, isHighScore: boolean = false) {
    this.gameNumber = gameNumber;
    this.rollCount = rollCount;
    this.score = score;
    this.isHighScore = isHighScore;
  }
}
