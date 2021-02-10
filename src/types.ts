export interface Player {
  username: string;
  score: number;
  points_gained: number;
}

export interface Room {
  index: string;
  type: string;
  language: string;
  password?: string;
  current_round: number;
  painter_index: number;
  players: Player[];
  current_turn: CurrentTurn;
}

export interface CurrentTurn {
  word: string;
  painter_left: boolean;
  is_canceled: boolean;
  num_reports: number;
  revealed: any[];
  countdown: number;
  guessed: {
    username: string;
    points_gained: number;
  }[];
}

export interface GameState {
  rooms: Room[];
}
