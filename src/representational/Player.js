import React from "react";
import '../Styles/Player.css';

const Player = props => {
    console.log(props);
    return (
        <div className="Player">
            <h3 onClick={props.delete}>Player Name: {props.name} </h3>
            <h4>Nationality: {props.nationality} </h4>
            <input type="text" onChange={props.inputChange} value={props.name} />
        </div>
    );

}

export default Player;