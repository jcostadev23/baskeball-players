import React from "react";
import { sortByNumber } from "../utils";
import { fetchData } from "../utils/fetchData";

async function ServerComponent() {
  let players: any = [];

  const [request, request2] = await Promise.all([
    fetchData(),
    fetchData("&cursor=75"),
  ]);
  players.push(request);
  console.log("data", players);

  return (
    <div>
      {players &&
        Object.keys(players).map((key) => (
          <div key={key}>
            <h2>{key}</h2>
            <ul>
              {sortByNumber(players[key]).map((player) => (
                <div key={player.id}>
                  {player.first_name}
                  {player.jersey_number}
                </div>
              ))}
            </ul>
          </div>
        ))}
      <h1>Basketboll Players</h1>
    </div>
  );
}

export default ServerComponent;
