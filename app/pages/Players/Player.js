import React from 'react';

import PlayerDetail from 'components/PlayerDetail';
import styles from './Player.scss';

class Player extends React.Component {
  render() {
    return (
      <div className={styles.playerDetailContainer}>
        <PlayerDetail {...this.props} />
      </div>
    );
  }
}

export default Player;
