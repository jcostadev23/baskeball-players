interface Team {
  id: number;
  name: string;
}

export interface Player {
  id: number;
  first_name: string;
  jersey_number: string;
  team: Team;
  position: string;
}

export interface StoredByTeams {
  [key: string]: Array<Player>;
}
