import { Player } from "../../types";

interface Props {
  player: Player;
}
const PlayerCard: React.FC<Props> = ({ player }) => {
  return (
    <div style={{ display: "flex", gap: "20px" }}>
      <li>Name: {player.first_name}</li>
      <li>Number: {player.jersey_number}</li>
    </div>
  );
};

export default PlayerCard;
