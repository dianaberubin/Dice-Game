import React from "react";
import "../App.css";
import Dice from "./Dice";
import Player from "./Player";
import Button from "./Button";
import Info from "./Info";

class Game extends React.Component {
  state = {
    dices: [null, null],
    points: 0,
    players: [
      { currentScore: 0, totalScore: 0 },
      { currentScore: 0, totalScore: 0 },
    ],
    oneIsPlaying: true,
    winner: false,
  };

  userInput = React.createRef();
    
    changePoints = () => {
      this.setState({points:this.userInput.current.value})
    }

  rollDice = () => {
    let dice1 = Math.ceil(Math.random() * 6);
    let dice2 = Math.ceil(Math.random() * 6);
    this.setState({ dices: [dice1, dice2] }, () => {
        this.updatePlayerScore();
    });
  };

  initializeCurrentScore = () => {
    const players = this.state.players;
    if (this.state.oneIsPlaying) {
      players[0].currentScore = 0;
    } else {
      players[1].currentScore = 0;
    }
    this.setState({ players: players });
  };

  updatePlayerScore = () => {
    const players = this.state.players;
    if (this.state.oneIsPlaying) {
      players[0].currentScore = this.state.dices[0] + this.state.dices[1];
    } else {
      players[1].currentScore = this.state.dices[0] + this.state.dices[1];
    }
    this.setState({ players: players });
  };

  hold = () => {
    this.updateTotal();
    this.cleanCurrent();
    if (this.isWin()) {
      let winner = this.isWin();
      this.setState({ winner: winner });
    }

    this.swichPlayers();
  };

  isWin = () => {
    const goal = this.state.points;
    if (this.state.oneIsPlaying) {
      if (this.state.players[0].totalScore >= goal) {
        return 1;
      }
    } 
    else if (this.state.players[1].totalScore >= goal) {
      return 2;
    } 
    else {
      return false;
    }
  };

  updateTotal = () => {
    const players = this.state.players;
    if (this.state.oneIsPlaying) {
      let value = this.state.players[0].currentScore;
      players[0].totalScore += value;
    } else {
      let value = this.state.players[1].currentScore;
      players[1].totalScore += value;
    }
    this.setState({ players });
  };

  cleanCurrent = () => {
    const players = this.state.players;
    if (this.state.oneIsPlaying) {
      players[0].currentScore = 0;
    } else {
      players[1].currentScore = 0;
    }
    this.setState({ players: players });
  };

  swichPlayers = () => {
    this.setState({ oneIsPlaying: !this.state.oneIsPlaying });
  };

  initializeState = () => {
    this.setState((state) => {
      return {
        dices: [null, null],
        points: 0,
        players: [
          { currentScore: 0, totalScore: 0 },
          { currentScore: 0, totalScore: 0 },
        ],
        oneIsPlaying: true,
        winner: false,
      };
    });
  };

  render() {
    return (
      <div className="Game">
        <Player
          active={this.state.oneIsPlaying}
          id="1"
          score={this.state.players[0].currentScore}
          total={this.state.players[0].totalScore}
        />
        <div className="buttons">
        <h4>Goal points:</h4>
        <input ref={this.userInput} type="number" default="Enter Number"/>
        <button onClick={this.changePoints}>Update Points</button> 
          <Info
            start={!this.state.winner}
            points={this.state.points}
            winner={this.state.winner}
          ></Info>
          <Button funcClick={this.initializeState} title="New Game" disable={false} />
          <Dice values={this.state.dices} />

          <Button funcClick={this.rollDice} title="Roll Dice" disable={true} />
          <Button funcClick={this.hold} title="Hold" disable={false} />
        </div>

        <Player
          active={!this.state.oneIsPlaying}
          id="2"
          score={this.state.players[1].currentScore}
          total={this.state.players[1].totalScore}
        />
      </div>
    );
  }
}
export default Game;
