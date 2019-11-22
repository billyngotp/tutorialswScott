import React, {Component} from 'react';
import boredGames from "../assets/boredgame.jpg"

export default class Games extends Component {
    render() {
        return(
            <>
                <div> WHAT THE? </div>
                <h1> I don't know</h1>
                <img alt = "boredgames" src = {boredGames} />
            </>
        );
    }
}