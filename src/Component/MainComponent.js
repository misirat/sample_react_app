import React, { Component } from 'react';
import playerList from '../assets/Players'
import PlayerList from '../lists/playerList';

class MainComponent extends Component {
    state = {
        players: playerList,
        toggle: true
    }

    changeWithInput = (event, index) => {
        const player = {
            ...this.state.players[index]
        }
        player.playerName = event.target.value;

        const players = [...this.state.players];
        players[index] = player;


        this.setState({
            players: players
        });
    }

    deletePlayer = index => {
        const player = this.state.players.map(item => item);
        player.splice(index, 1);

        this.setState({
            players: player
        });
    }

    toggleFunc = () => {
        this.setState({ toggle: !this.state.toggle })
    }


    render() {
        let players = null;
        //console.log(this.state.toggle);
        if (this.state.toggle) {
            players = <PlayerList
                players={this.state.players}
                changeWithInput={this.changeWithInput}
                deletePlayer={this.deletePlayer} />
        }


        return (
            <div>
                <h1 className='head'>Player's name & nationality</h1>
                <button onClick={this.toggleFunc}>Toggle</button>
                {players}
            </div>

        );
    }
}

export default MainComponent;