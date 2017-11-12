import React from 'react';
import { Link } from 'react-router-dom';
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
          <div className={styles.title}>
            <h3>Players</h3>
            <Link className='btn btn-default button' to='/teams'>Start the game</Link>
          </div>
          <div id={styles.playersList}>
            {this.state.list.players.slice().map(player =>
              <Player key={player.name} {...player} />
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default PlayersCollection;
