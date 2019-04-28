import React, { Component } from 'react';
import Header from './Header';
import Player from './Player';
import AddPlayerForm from './AddPlayerForm';

class App extends Component {
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
    const highScore = this.getHighScore();

    return (
      <div className="scoreboard">
        <Header 
          players={this.state.players} 
        />
  
        {/* Players list */}
        {this.state.players.map( (player, index) =>
          <Player 
            name={player.name}
            score={player.score}
            id={player.id}
            index={index}
            key={player.id.toString()} 
            changeScore={this.handleScoreChange}
            removePlayer={this.handleRemovePlayer}
            isWinning={highScore === player.score}
          />
        )}

        <AddPlayerForm
          addPlayer={this.handleAddPlayer}
        />
      </div>
    );
  }
}

export default App;
