import React from "react";
import Player from '../representational/Player';

const PlayerList = props => {
    return (
        props.players.map((p, i) => {
            return (
                <Player
                    delete={() => props.deletePlayer(i)}
                    name={p.playerName}
                    nationality={p.playerNationality}
                    key={p.id}
                    inputChange={(event) => props.changeWithInput(event, i)} />
            );
        })
    );
}

export default PlayerList;