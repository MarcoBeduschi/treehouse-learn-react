import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Counter from './Counter';
import Icon from './Icon';

class Player extends PureComponent {

  static PropTypes = {
    changeScore: PropTypes.func,
    removePlayer: PropTypes.func,
    name: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    score: PropTypes.number.isRequired,
    index: PropTypes.number.isRequired,
    isWinning: PropTypes.bool
  }
  
  render() {
    const {
      id,
      index,
      name,
      score,
      removePlayer,
      changeScore,
      isWinning
    } = this.props

    return (
      <div className="player">
        <span className="player-name">
          <button className="remove-player" onClick={() => removePlayer(id)}>✖</button>

          <Icon isHighScore={isWinning} />
          
          { name }
        </span>
  
        <Counter
          score={score}
          index={index}
          changeScore={changeScore}
        />
      </div>
    );
  }
}

export default Player;