import React from 'react';

import players from 'store/players.json';
import Player from './Player';

import styles from './PlayersCollection.scss';

class PlayersCollection extends React.Component {
  constructor() {
    super();
    this.state = {
      list: players
    }
  }

  render () {
    return (
      <div className='row'>
        <div className={`col-xs-12 col-sm-12 col-md-12 ${styles.pd}`}>
          <h3>Players</h3>
          <div id={styles.playersList}>
            {this.state.list.players.slice().map((player, index) =>
              <Player key={index} {...player} />
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default PlayersCollection;
