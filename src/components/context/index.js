import React, { Component } from 'react';

const ScoreboardContext = React.createContext();

export class Provider extends Component {

  state = {
    players: [
      {
        name: "Guil",
        id: 1,
        score: 0,
        isWinning: false,
      },
      {
        name: "Treasure",
        id: 2,
        score: 0,
        isWinning: false
      },
      {
        name: "Ashley",
        id: 3,
        score: 0,
        isWinning: false
      },
      {
        name: "James",
        id: 4,
        score: 0,
        isWinning: false
      }
    ]
  };       
  
  // player id counter
  prevPlayerId = 4; 

  getHighScore = () => {
    const scores = this.state.players.map( p => p.score );
    const highScore = Math.max(...scores);

    if (highScore) {
      return highScore;
    }

    return null
  }

  handleScoreChange = (index, delta) => {
    this.setState( prevState => ({
      score: prevState.players[index].score += delta
    }));
  }

  handleAddPlayer = (name) => {
    this.setState( prevState => {
      return {
        players: [
          ...prevState.players,
          {
            name,
            score: 0,
            id: this.prevPlayerId += 1,
          }
        ]
      }
    })
  }
  
  handleRemovePlayer = (id) => {
    this.setState( prevState => {
      return {
        players: prevState.players.filter(p => p.id !== id)
      };
    });
  }

  render() {
    return (
      <ScoreboardContext.Provider value={{
        players: this.state.players,
        actions: {
          changeScore: this.handleScoreChange,
          removePlayer: this.handleRemovePlayer,
          addPlayer: this.handleAddPlayer
        }
      }}>
        { this.props.children }
      </ScoreboardContext.Provider>
    );
  }
}
export const Consumer = ScoreboardContext.Consumer;