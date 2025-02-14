import { useEffect, useState } from "react";
import "./App.css";
import { Player, StoredByTeams } from ".././types";

function App() {
  const [players, setPlayers] = useState<Array<any>>([]);

  useEffect(() => {
    (async () => {
      const [request1, request2] = await Promise.all([
        fetchData(30, 1),
        fetchData(30, 31),
      ]);

      const organizedByTeam = [...request1, ...request2].reduce(
        (organizedData, player) => {
          const teamName = player.team.name;
          const position = player.position;

          let team = organizedData.find((t: any) => t.team === teamName);

          if (!team) {
            team = { team: teamName, position: {} };
            organizedData.push(team);
          }

          if (!team.position[position]) {
            team.position[position] = [];
          }

          team.position[position].push(player);
          return organizedData;
        },
        []
      );

      setPlayers(organizedByTeam);
    })();
  }, []);

  return (
    <div className="App">
      {players.map((team) => (
        <div key={team.team}>
          <strong>
            {team.team}:{" "}
            <div>
              {Object.keys(team.position).map((position) => (
                <span key={position} style={{ color: "skyBlue" }}>
                  {team.position[position].map(
                    (player: any) => player.first_name
                  )}
                </span>
              ))}
            </div>
          </strong>
        </div>
      ))}
    </div>
  );
}

export default App;

const fetchData = (per_page: number, number_pages: number) => {
  const url = `https://api.balldontlie.io/v1/players?per_page=${per_page}&cursor=${number_pages}`;
  const headersAuthorization = {
    method: "GET",
    headers: {
      "Content-Type": "applicastion/json",
      Authorization: "8f6aecab-7280-4f54-b161-49b8cdd71ed0",
    },
  };

  return fetch(url, headersAuthorization)
    .then((response) => response.json())
    .then((data) => data.data);
};

const groupPlayersByTeam = (players: Array<Player>) => {
  return players.reduce((groupPlayers: StoredByTeams, player: Player) => {
    if (!groupPlayers[player.team.name]) {
      groupPlayers[player.team.name] = [];
    }
    groupPlayers[player.team.name].push(player);
    return groupPlayers;
  }, {});
};

const organizePlayersByPosition = (players: StoredByTeams) => {
  return Object.keys(players).map((team) =>
    players[team].reduce((position: any, player: Player) => {
      if (!position[player.position]) {
        position[player.position] = [];
      }
      position[player.position].push(player);
      return position;
    }, {})
  );
};
