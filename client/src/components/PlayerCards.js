import React from "react";

const PlayerCards = props => {
  return (
    <div className="player-cards">
      <h2>{props.player.name}</h2>
      <h3>{props.player.country}</h3>
      <p>Search Count: {props.player.searches}</p>
    </div>
  );
};

export default PlayerCards;