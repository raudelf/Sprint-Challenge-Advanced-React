import React, { Component } from "react";
import PlayerCards from "./PlayerCards";

class Players extends Component {
    state = {
        players: [],
    }

    componentDidMount() {
        fetch('http://localhost:5000/api/players')
        .then(res => res.json())
        .then(res => {
            console.log(res);
            this.setState({...this.state, players: res})
        })
        .catch(err => console.log('RF: Players fetch Error: ', err));
    }

    render(){
        return (
        <div className="container">
            <div className="playerContainer" data-testid='displayPlayers'>
                {this.state.players.map((player, index) => {
                    return <PlayerCards key={index} player={player} />;
                })}
            </div>
        </div>
        );
    }
}

export default Players;