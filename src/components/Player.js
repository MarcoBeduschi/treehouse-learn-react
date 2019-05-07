import React, { PureComponent } from 'react';
import { Consumer } from './context';
import PropTypes from 'prop-types';
import Counter from './Counter';
import Icon from './Icon';

class Player extends PureComponent {

  static PropTypes = {
    index: PropTypes.number.isRequired,
    isWinning: PropTypes.bool
  }
  
  render() {
    const {
      index,
      isWinning
    } = this.props

    return (
      <Consumer>
        { ({ actions, players }) =>(
          <div className="player">
            <span className="player-name">
              <button className="remove-player" onClick={() => actions.removePlayer(players[index].id)}>✖</button>

              <Icon isHighScore={isWinning} />
              
              { players[index].name }
            </span>
      
            <Counter
              index={index}
            />
          </div>
        )}
      </Consumer>
    );
  }
}

export default Player;