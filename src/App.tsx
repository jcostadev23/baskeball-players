import { useCallback, useEffect, useRef, useState } from "react";
import "./App.css";
import { StoredByTeams } from "./types";
import { Button } from "./components/Button";

type Team = {
  id: number;
  name: string;
};

type FilterByTeam = {
  [team: string]: Player[];
};

type Player = {
  id: number;
  first_name: string;
  last_name: string;
  jersey_number: string;
  team: Team;
};

const callback = async () => {
  const url = `https://api.balldontlie.io/v1/players?per_page=${20}&cursor=${2}`;
  const headersAuthorization = {
    method: "GET",
    headers: {
      "Content-Type": "applicastion/json",
      Authorization: "8f6aecab-7280-4f54-b161-49b8cdd71ed0",
    },
  };

  const response = await fetch(url, headersAuthorization)
    .then((resp) => resp.json())
    .then((data) => data.data);

  return response;
};
function App() {
  const [isLoading, setIsLoading] = useState(false);
  const players = useRef<Array<Player>>([]);

  let currentPlayers = players.current;
  const getplayers = async () => {
    setIsLoading(true);
    currentPlayers = await callback();

    setIsLoading(false);
    players.current = currentPlayers;
  };

  const filterByTeam: FilterByTeam = currentPlayers.reduce(
    (teams: any, player) => {
      const teamName = player.team.name;
      if (!teams[teamName]) {
        teams[teamName] = [];
      }

      teams[teamName].push(player);
      return teams;
    },
    {}
  );

  const playersName = currentPlayers.map((player) => (
    <div>
      firstName: <strong>{player.first_name}</strong> lastName:
      <strong>{player.last_name}</strong>
    </div>
  ));

  console.log("entries", currentPlayers, players.current);
  return (
    <div className="App">
      {isLoading && <div>Loading...</div>}
      {playersName}
      <div>
        {Object.entries(filterByTeam).map(([team, values]) => (
          <div key={team}>
            Team Name: <strong> {team} </strong>
            <span>
              {values.map(
                (player: Player) =>
                  ` Full Name: ${player.first_name} ${player.last_name}`
              )}
            </span>
          </div>
        ))}
      </div>
      <Button
        onClick={getplayers}
        label="Get players"
        backgroundColor="whiteSmoke"
      />
    </div>
  );
}

export default App;
