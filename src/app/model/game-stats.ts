export class GameStats {
  totalGamesPlayed: number;
  highestScore: number;
  highestScoreNumRolls: number;
  avgNumRolls: number;

  constructor(
    totalGamesPlayed: number = 0,
    highestScore: number = 0,
    highestScoreNumRolls: number = 0,
    avgNumRolls: number = 0
  ) {
    this.totalGamesPlayed = totalGamesPlayed;
    this.highestScore = highestScore;
    this.highestScoreNumRolls = highestScoreNumRolls;
    this.avgNumRolls = avgNumRolls;
  }
}
