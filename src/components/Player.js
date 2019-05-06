import React, { PureComponent } from 'react';
import { Consumer } from './context';
import PropTypes from 'prop-types';
import Counter from './Counter';
import Icon from './Icon';

class Player extends PureComponent {

  static PropTypes = {
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
      isWinning
    } = this.props

    return (
      <Consumer>
        { context =>(
          <div className="player">
            <span className="player-name">
              <button className="remove-player" onClick={() => context.actions.removePlayer(id)}>✖</button>

              <Icon isHighScore={isWinning} />
              
              { name }
            </span>
      
            <Counter
              score={score}
              index={index}
            />
          </div>
        )}
      </Consumer>
    );
  }
}

export default Player;