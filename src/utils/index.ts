import { Player, StoredByTeams } from "../types";

export const filterByTeam = (players: Array<Player>) => {
  const storedByTeams: StoredByTeams = {};

  players.forEach((player: Player) => {
    if (!storedByTeams[player.team.name]) {
      storedByTeams[player.team.name] = [];
    }

    storedByTeams[player.team.name].push(player);
  });

  return storedByTeams;
};

export const sortByNumber = (players: Array<Player>) =>
  players.sort((a, b) => parseInt(a.jersey_number) - parseInt(b.jersey_number));
