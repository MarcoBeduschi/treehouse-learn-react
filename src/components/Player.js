import React, { PureComponent } from 'react';
import { Consumer } from './context';
import PropTypes from 'prop-types';
import Counter from './Counter';
import Icon from './Icon';

class Player extends PureComponent {

  static PropTypes = {
    name: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    index: PropTypes.number.isRequired,
    isWinning: PropTypes.bool
  }
  
  render() {
    const {
      id,
      index,
      name,
      isWinning
    } = this.props

    return (
      <Consumer>
        { ({ actions }) =>(
          <div className="player">
            <span className="player-name">
              <button className="remove-player" onClick={() => actions.removePlayer(id)}>✖</button>

              <Icon isHighScore={isWinning} />
              
              { name }
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